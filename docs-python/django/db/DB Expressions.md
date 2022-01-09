
# Efficient filtering over Querysets

## F expression

Instances of F() act as a reference to a model field within a query. All Python does, through Django’s F() class, is create the SQL syntax to refer to the field and describe the operation. The application doesn't retrieve data, perform the operation and store it again; the operation is self-contained in the DB as the app merely tells the DB the logic to run. Naturally, this also helps us side-step any *race condition* related issues

These references can also be used in query filters to compare the values of two different fields on the same model instance

With constants and with other F() objects, F() objects supports

- addition
- subtraction
- multiplication
- division
- modulo
- power arithmetic 
- timedelta (for date/time objects)

For related objects referenced, an F() object with a double underscore will introduce any joins needed to access the related object.However, you can’t introduce joins when you use F() objects in an update – you can only reference fields local to the model being updated


## Q Objects

Q objects provides you complete control over the where clause of the query.

Usually any functions over the queryset are “AND”ed together. Q objects allow the developer to easily define AND, OR, NOT and any futher nesting of the same into complex logic.

Lookup functions can mix the use of Q objects and keyword arguments. However, if a Q object is provided, it must precede the definition of any keyword arguments. 

```python
queryset = User.objects.filter(
    Q(first_name__startswith='R') | ~Q(last_name__endswith='son')
)
```

## Annotate

## Aggregate

## Conditional

## Other operations

**With other queryset**
- union(*qses) : All distinct entries in all the Querysets
- intersection(*qses) : All distinct entries common to all hte Querysets
- difference(*qses) : All entries unique to Queryset onject it is called on

**With Related Models**
- select_related : Get all the related single-valued relationships (foreign key and one-to-one) referenced by objects of a Queryset
- prefetch_related : Gets all related data that has been referenced by the objects in the queryset. Used to bypass the 1+N problem
  - To clear any prefetch_related behavior, pass `None` as a parameter
  - prefetch_related_objects is separate function does this on an existing iterable of models

**With the Model**
- get_or_create
  
- update_or_create

- select_for_update : Returns a queryset that will lock rows until the end of the transaction (on supported databases)
  
- bulk_create : Inserts the provided list of Model objects into the database 
  - The model’s save() method will not be called, and the pre_save and post_save signals will not be sent.
  - It does not work with child models in a multi-table inheritance
  - Doesn't work with M2M relations

- bulk_update : Updates the provided list of Model objects into the database 
  - Each model’s save() method isn’t called, and the pre_save and post_save signals aren’t sent.
  - You cannot update the model’s primary key.
  - If updating a large number of columns in a large number of rows, the SQL generated can be very large. Avoid this by specifying a suitable   - batch_size.
  - Updating fields defined on multi-table inheritance ancestors will incur an extra query per ancestor.
