# Prefetching

Prefetching is when the queryset pulls in and populates related fields. This is primarily done to overcome the 1+N problem where multiple db requests are made when iterating over an queryset that has related fields in it. Django ORM gives rise to this problem as the querysets are lazy. The laziness is useful when the application apply / alter conditions over the existing queryset but it gives rise to cumbersome and wasteful IO calls when dealing with models with related fields.

This becomes even more trickier and wasteful when we are deling with nested loops and/or multiple related fields.

In order to avoid all the wasteful processing, we pull in all the related fields when invoking the queryset. This is called prefetching, we use two methods to enforce the same

- prefetch_related
- select_related

## select_related

It pulls all the related fields in a single query. It uses a `JOIN` to merge the tables

```python
queryset.select_related() # joins with all the tables that related to the model
queryset.select_related('field_1') # joins with the table referenced by field_1
queryset.select_related('field_1','field_2') # joins with the tables referenced by field_1 and field_2
```


## prefetch_related

It executes the base queryset, make a list of the values that are pointed by the related field of the model. It then runs a separate query for each table referene by the related fields. This pulls all the data required for the related fields with separate queries only once per queryset (vs calling it for each object). Finally,  the joins are performed in-memory.

**Why use *prefetch_related***

- It can handle Many-to-Many and Many-to-One relationships (vs following a ForeignKey)
- It never fetches duplicated data as the referenced rows are called once and joined in-memory. This is a huge perfomance gain when dealing with many-to-many relationships.

```python
from django.db.models import Prefetch

queryset.prefetch_related() # retrieves data from all the tables that related to the model
queryset.prefetch_related(Prefetch(
            'Related_Set',
            queryset=Related_Model.objects.filter()
            ) # Reduces to two queries even dealing with conditions for related_field
```

`Prefetch` helps us avoid creating new queries when applying conditions on a the prefetched field. This problem is inherent to the implmentaton and logic of prefetch_related, thus Preftch allows us to deal with it by pulling it in when performing the prefetch. We can store the results in separate field with`to_attr` of the *Prefetch* constructor.

## TLDR

It varies by situation whether `select_related()` or `prefetch_related()` is optimal. Sometimes, it may even be optimal to mix and match the two.

If in doubt, use `prefetch_related()`. It's queries are unlikely to be much more expensive than `select_related()` in most usecases.
