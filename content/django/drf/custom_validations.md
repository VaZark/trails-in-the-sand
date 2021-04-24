---
title: Custom Validations
description: A quick look at how to customize validations with DRF
image: #
publishedAt: 2021-04-16
authors:
  - name: Vasanth M
    avatarUrl: /vaz_avatar.jpg
    link: https://twitter.com/vazarks
tags:
  - Django
  - DRF
  - Serializers
  - Validation
---

## Validation

Error messages are created when the serializer classes and their fields are validated.

`validate()` checks the fields and then runs the class level validations. We can raise errors with `ValidationError`. Custom validations are run with `validate_<field_name>(self)` for fields and in the `validate()` for the class-level validations.

However, we can choose to run multiple validations for a single field with the `validators` field of any Field object.

```python
def is_valid_value(value):
  if value > 10:
    raise serializers.ValidationError('Value cannot be higher than 10')

def is_postive(value):
  if value < 0:
    raise serializers.ValidationError('Value cannot be negative ')

class RandomSerializer(serializers.ModelSerializer):
    value = IntegerField(validators=[is_valid_value, is_positive])
```

## Context for serializers

Occasionally serializers might need additional data to perform custom / overridden operations. We can set via the *context* argument of any serializer instance. The context param conventionally takes a dictionary as input.

### Additonal context for nested serializers

Nested serializers are evaluated before the current serializer. Occasionally, a child serializer might need to look up and use a parent serializer's fields or some other related data.

They can be accessed by using `self.parent.initial_data` for regular nested serializer and with `self.parent.parent.initial_data` when the nested serializer is passed with *Many=True*.

Sometimes, when the *initial_data* is unavailable or if some other unrelated data external to the serializer has to be passed, we can pass it down as a part of the context dict.

```python
class ParentSerializer(serializers.Serializer):
  child = ChildSerializer()

  def to_internal_value(self, data):
    self.initial_data = data # Force set the initial_data for the child
    super().to_internal_value(data)

class ChildSerializer(serializers.Serializer):

  def validate(self, data):
    parent_data = self.parent.initial_data
    # Validation
    return data
```
