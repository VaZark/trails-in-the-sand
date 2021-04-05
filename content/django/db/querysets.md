---
title: Querysets
description: Cheatsheet for Querysets
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

## What are Querysets ?

A *QuerySet* represents a collection of objects from your database. It can have zero, one or many filters. Filters are used to narrow down the query results based on the given parameters. 

To retrieve objects from the database, we construct a QuerySet via a *Manager* on the model class.


```python
all_entries = Entry.objects.all()
filtered_entries = Entry.objects.filter(pub_date__year=2006)
entries_after_excluded = Entry.objects.exclude(foreignKey=instanceObj)
chained_filters = Entry.objects.filter(pub_date__year=2006).exclude(pub_date__gte=datetime.date.today()
```

## Lazy Evaluation

QuerySets are lazy. Django will actually run the query only when the QuerySet is evaluated, ie during,

- Iteration
- Slicing
- len() / list() / repr() / bool()
- Pickling/Caching

## Caching

Each QuerySet contains a cache to minimize database access. The first time a QuerySet is evaluated the application saves the query results in the QuerySet’s cache and returns the results that have been explicitly requested (e.g., the next element, if the QuerySet is being iterated over). *Subsequent evaluations of the QuerySet reuse the cached results.*

*Querysets do not always cache their results*. If the cache is empty and the app does a lookup, the value is not cached and the CD will be hit for each request made.


## Queryset as Managers

Sometimes we need a specific reuseable logic in certain workflows. However we would not wish to tie down or change the models as they are generic an can be extended by other apps / workflows. In this scenario, we can leverage custom Querysets and Managers.

When we are using the manager only for custom querysets and no Manager method are invloved, we can use `as_manager()` over a custom Queryset to let django generate a Manager based on it.

```python
class CustomQueryset(models.QuerySet):
    def filter_1(self):
        return self.filter(field_1__gte=45)

    def filter_2(self, val):
        return self.filter(field_2__lt=val)

class SampleModel(models.Model):
    name = models.CharField(max_length=30)
    field_1 = models.IntegerField(default=0)
    field_2 = models.FloatField(max_length=10)

    custom_manager = CustomQueryset.as_manager()
```

## Common filters

- exact, iexact
- contains, icontains
- startswith, istartswith
- endswith, iendswith
- regex
- range
- date
  - year
  - quarter (accepts [1,4])
  - month
  - week
  - day
- time
  - hour
  - minute
  - second