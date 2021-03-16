---
title: Django Related Datafields
description: Django, DRF
image: #
publishedAt: 2021-03-17
authors:
  - name: Vasanth M
    avatarUrl: /vaz_avatar.jpg
    link: https://twitter.com/vazarks
tags:
  - Django
  - DRF
  - Serializers
  - Models
---

## Examining Data Relations

One of the most common usecases when dealing with any SQL model is the storage and retrieval of related fields viz *Foreign Keys*, *OneToOne* Fields and *ManyToMany* fields. While DRF allows us to create *ModelSerializers* for any Django model, it retrieves only the foreignKey of the corresponding related fields.

If the developer wishes to expand and fetch the related details for the same, there are a few ways to go about it for the different types of field and usecases.

## Foreign Key and OneToOne field

There are two ways to expand and fetch data when one of the endpoints deals with a single reference

- `depth=1`
- Related Serializer

***depth=1*** 

Adding this parameter in the *Meta*  class of the serializer that refers to another Field, fetches all the details of same referenced field with a corresponding serializer

```python{1,3-5}[child_serializer.py]
class ChildSerializer(ModelSerializer):
  class Meta:
    model = Child
    fields = ['id','name','parent']
    depth=1
```
***Related Serializer*** 

Another way to fetch the same result is to define the serializer to be used for a corresponding field. This particularly useful when we wish to override a few settings

```python{1,3-5}[child_serializer.py]
class ChildSerializer(ModelSerializer):
  parent = ParentSerializer()
  class Meta:
    model = Child
    fields = ['id','name','parent']
```


##  ManyToMany Field

### Through Table