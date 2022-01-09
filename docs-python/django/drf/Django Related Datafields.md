# Django Related Datafields

## Examining Data Relations

One of the most common usecases when dealing with any SQL model is the storage and retrieval of related fields viz *Foreign Keys*, *OneToOne* Fields and *ManyToMany* fields. While DRF allows us to create *ModelSerializers* for any Django model, it retrieves only the foreignKey of the corresponding related fields.

If the developer wishes to expand and fetch the related details for the same, there are a few ways to go about it for the different types of field and usecases.

## Foreign Key and OneToOne field

There are two ways to expand and fetch data when one of the endpoints deals with a single reference

- `depth=1`
- Related Serializer

***depth=1*** 

Adding this parameter in the *Meta*  class of the serializer that refers to another Field, fetches all the details of same referenced field with a corresponding serializer. The value assigned to the `depth` variable defines the number of levels the Serializer will try to fetch references for,

```python
class ChildSerializer(ModelSerializer):
  class Meta:
    model = Child
    fields = ['id','name','parent']
    depth=1
```
***Related Serializer*** 

Another way to fetch the same result is to define the serializer to be used for a corresponding field. This particularly useful when we wish to override a few settings

```python
class ChildSerializer(ModelSerializer):
  parent = ParentSerializer()
  class Meta:
    model = Child
    fields = ['id','name','parent']
```

##  ManyToMany Field

The m2m field is a database concept to define references between the columns of two tables which are related but independent of each other. It is accessible from both sides of the definition. The best way to imagine it is to think of ForeignKey fields that are applicable on both sides of the equation

Eg: An *order* can have multiple products; You can also look up the orders that have a *product*

Django implements with a `ManyToManyField(Table_2)`

### Through Table

Django internally creates a `through` table that tracks the exact relation between the two tables of *ManyToMany* relationship.

However, we can leverage and implement this table ourselves if we wish to add additional data to the relationship.

```python

class Order(models.Model):
  name = models.CharField(max_length=30)
  toppings = models.ManyToManyField('Product', through='OrderDetail')

class Product(models.Model):
  name = models.CharField(max_length=30)
  price = models.PositiveIntegerField()

class OrderDetail(models.Model):
  order = models.ForeignKey(Order, on_delete=models.CASCADE)
  product = models.ForeignKey(Product, on_delete=models.CASCADE)
  count = models.PositiveIntegerField() # Additional Field

# Retrieve additional fields with related_name
order_obj.orderdetail_set.select_related('product')
```