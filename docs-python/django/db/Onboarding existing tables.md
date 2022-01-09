# Onboarding existing tables

## What and Why

Databases are an essential part of any non-trivial web application. Databases can be created and managed via the command-line, GUI application (eg.pgadmin) or via an ORM. What we are looking at here right now, is a way to onboard existing tables in a database into a django application.

This is particularly useful when you need to leverage the powerful django admin for use cases such as internal admin management for an existing database. Django essential performs DML, without any DDL access.

## How

> This is not a definite model generation. Validate the model against the database after generation.  
> This feature is merely a shortcut

```bash
python manage.py inspectdb --include-views > models.py
```

The above command creates unmanaged models. The created model class tells Django not to manage each table’s creation, modification, and deletion. This is defined by the `managed = False` in the Meta class of the generated model.

If you want to allow Django handle the management of table itself, remove the `managed = False` from the Meta class.