---
title: Model migration across apps
description: A quick lookup on how to move models between apps in an existing project
image: #
publishedAt: 2021-04-24
authors:
  - name: Vasanth M
    avatarUrl: /vaz_avatar.jpg
    link: https://twitter.com/vazarks
tags:
  - Django
  - Django ORM
  - DB
---

## What and Why

Sometimes as a part of a code refactor or to enable packaging some logic into reusable packages, we might have to move some Django models between apps.

This is essentially a minor process when the data is relatively smaller and manageable, _when not using an ORM_. Django's ORM as like many of it's counterparts maintains an additiional reference model to keep track of relations, references and the state of the application's schema.

So, this will be a simple but tricky process. The simplest solution is to ensure that the new model created points to the old table. This also involves renaming the database table involved. 

> If the migration histories are clean and few, update the older migrations to create only the new model and squash / delete these migrations once your done.

## The breakdown

Things you need to understand

- `migrations.SeparateDatabaseAndState` : Allows different actions are run on the Django model and on the DB for same migration
- `migrations.AlterModelTable` : Allows to rename a model's table name

### Prepping the new model

1. Create the new model
   - Identify the name of the new model to be created with `sqlmigrate` (generates the SQL query to be executed)
2. Delete the old model
3. Update all references to the old model

### Updating migrations

Generate the migrations for the operation

- In the migration deleting the old model
    ```python
    operations = [
            # migrations.DeleteModel(
            #     name='TargetModel',
            # ),
            migrations.SeparateDatabaseAndState(
                state_operations=[
                    migrations.DeleteModel(
                        name='TargetModel',
                    ),
                ],
                database_operations=[
                    migrations.AlterModelTable(
                        name='TargetModel',
                        table='newApp_targetModel', # Identified with sqlmigrate
                    ),
                ],
            )]
    ```

- In the migration creating the new model

    ```python
    operations = [
        # migrations.CreateModel(
        #     name='Product',
        #     fields=[
        #         ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
        #     ],
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.CreateModel(
                    name='TargetModel',
                    fields=[
                        ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                    ],
                ),
            ],
            # Table already exists. 
            database_operations=[],
        )]
    ```

## Dealing with Foreign Keys

Any model migration that has foreign keys essentially, deletes the old keys and recreates it again. However, since we are merely renaming the table, make sure that any additional migrations that deal with foreign keys do not modify the existing relationship. Once agains, we are aided by the `SeparateDatabaseAndState` function.

- FK in Target Model
    ```python
        operations = [
            # migrations.RemoveField(
            #     model_name='TargetModel',
            #     name='fk_name',
            migrations.SeparateDatabaseAndState(
                state_operations=[
                    migrations.RemoveField(
                        model_name='TargetModel',
                        name='fk_name',
                    ),
                ],
                database_operations=[],
            )]
    ```

- FK to Target Model
    ```python
        operations = [
            # migrations.AlterField(
            #     model_name='otherModel',
            #     name='fk_to_target',
            #     field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='newApp.TargetModel'),
            # ),
            migrations.SeparateDatabaseAndState(
                state_operations=[
                    migrations.AlterField(
                    model_name='OtherModel',
                        name='fk_to_target',
                        field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='newApp.TargetModel'),
                    ),
                ],
                # You're reusing an existing table, so do nothing
                database_operations=[],
            )]
    ```