---
title: Managers
description: Cheatsheet for Managers
image: #
publishedAt: 2021-04-05
authors:
  - name: Vasanth M
    avatarUrl: /vaz_avatar.jpg
    link: https://twitter.com/vazarks
tags:
  - Django
  - Django ORM
---

## What are Managers ?

A *Manager* is used to the interface through which database query operations are provided to Django models. Each model has atleast one Manager. The default manager is called *objects*.

We can build custom managers when we need to

- Modify the initial QuerySet the Manager returns.
- Add extra Manager methods : To add “table-level” functionality to your models

## Custom Manager

It is very straightforward to change the default manager.

```python
class CustomManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().exclude(name__istartswith='AZ')

    def filter_1(self):
        return self.filter(field_1__gte=45)

    def filter_2(self, val):
        return self.filter(field_2__lt=val)

class SampleModel(models.Model):
    name = models.CharField(max_length=30)
    field_1 = models.IntegerField(default=0)
    field_2 = models.FloatField(max_length=10)

    custom_manager = CustomManager()
    # overriding objects field will alter the default manager
```

However, these methods are not chainable. This is because the operations are called over the Queryset used. If chainable methods are required, define them under a Custom Queryset and feed it to out Custom Manager


```python

class CustomQueryset(models.QuerySet):
    def filter_1(self):
        return self.filter(field_1__gte=45)

    def filter_2(self, val):
        return self.filter(field_2__lt=val)

class CustomManager(models.Manager):
    def get_queryset(self):
        return CustomQueryset.(self.model, using=self._db)

    def table_lvl_operation(self):
        pass

class SampleModel(models.Model):
    name = models.CharField(max_length=30)
    field_1 = models.IntegerField(default=0)
    field_2 = models.FloatField(max_length=10)

    custom_manager = CustomManager()
    # Once we've defined a custom manager on our model, objects won't be defined for the model anymore
    # overriding objects field is useful to treat the custom manager without breaking convention
```

### Custom Manager with different Querysets

If the model needs both a custom Manager and a custom QuerySet or a custom Manager with different queryset, `from_queryset()` returns a subclass of your base Manager with a copy of the custom QuerySet methods

```python
class CustomManager(models.Manager):
    def manager_only_method(self):
        return

class CustomQuerySet(models.QuerySet):
    def queryset_method(self):
        return

## Runs manager_only method on the qs returned by queryset_method
MyManager = CustomManager.from_queryset(CustomQuerySet) 
class MyModel(models.Model):
    objects = MyManager()
```

## Final Fallback

The raw() manager method can be used to perform raw SQL queries that return model instances. This method takes a raw SQL query, executes it, and returns a *RawQuerySet* instance. This *RawQuerySet* instance can be iterated over like a normal *QuerySet* to provide object instances

- It automatically maps fields in the query to fields on the model.
- Matching is done by name. This means that you can use SQL’s AS clauses to map fields in the query to model fiel
- The fields that are omitted from the SQL query will be loaded on demand by another hit to the DB
- The primary key field can’t be left out in any query.

```python
Model.objects.raw('SELECT * FROM app_model'):
```