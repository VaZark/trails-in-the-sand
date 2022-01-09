# What are Mixins?

## Introduction

> A mixin is a stand-alone base type that provides limited functionality and polymorphic resonance for a child class. Mixins only exist in multiple-inheritance languages. You can't do a mixin in Java or C#.

Mixins are essentially ways of extending functionality of a class. It is used to implement a specific functionality that can be shared across multiple classes that need not be logically related but require the implementation. Imagine an implemened interface that is being extended by different classes.

```python

class Mixin_class(object):
  def mixin_fn(self):
    print("Mixin")


class Random_class(Mixin_class): # can now access mixin_fn()
  pass
```

Since mixins are used in multipe inheritance languages, any class can inherit multiple mixins. In case of conflicting names, the left-most implementation is used (due to python's Right-to-Left hierarchy).

In frameworks like DRF, mixins are used to define specific child classes based off mixins. Eg: `ListCreateAPIView` is defined by inheriting the `GenericAPIView`, `ListModelMixin` and `CreateModelMixin`.  