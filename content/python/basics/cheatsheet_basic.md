---
title: Cheatsheet for basic python
description: Reference page for useful functions in python
image: #
publishedAt: 2021-03-28
authors:
  - name: Vasanth M
    avatarUrl: /vaz_avatar.jpg
    link: https://twitter.com/vazarks
tags:
  - python
  - basics
  - reference
---

## Functional

### Filter

Applies a filter over the iterable based on the input given to return a filtered iterable. The function must return a boolean output. If it doesn't, it'll be treated as a success by default


```python
iterable_out_obj = filter(function, iterable_obj)

even = filter(lambda x: x % 2 == 0,  [1, 2, 5])) 
# even ==> [2]

broken = filter(lambda x: x % 2,  [1, 2, 5])) 
# broken ==> [1,2,5]
```

### map

Applies a function over one or more iterable objects to return an iterable. The function used must have params that are equal to no of iterable objects passed. python zips the objects passed based on position. 

```python
# Single obj map
iterable_out_obj = map(function, iterable_obj)

# Multiple obj map
iterable_out_obj = map(lambda x, y: x * y, [2, 4, 6], [1, 3, 5])) 
# iterable_out_obj ==> [2, 12, 30]
```

### Reduce

It lives in a module called `functools` in the standard library. It applies a function over an iterable to *reduce* it to a single value

```python
from functools import reduce
# Multiply all
reduce(lambda acc, obj: acc * obj, [1,2,3,4,5], 3 ) # ==> 360
```

### Accumulate

It lives in a module called `itertools` in the standard library. It can be imagined as a cross between map and reduce. It takes function and an iterable as input and returns iterable as output. The default function is summation.

```python
from itertools import accumulate

out = list(accumulate([1, 2, 3, 4]))
# out => [1,3,6,10]

out = list(accumulate([1, 2, 3, 4]), lambda acc, obj: acc * obj)
# out => [1,2,6,24]
```

### Generators

It can be imagined to be a function that can returns different results multiple times. These generator functions are held in memory till they are properly exited or error out. They are primarily useful for lazy evaluation of infinite (or sufficiently long) lists which saves memory consumption.

```python

def multi_yield():
    # Can be called only 3 times
    yield "FIRST OUT"
    yield "SECOND OUT"
    return "END"
multi_obj = multi_yield()
next(multi_obj)) # FIRST OUT
next(multi_obj)) # SECOND OUT
next(multi_obj)) # END
next(multi_obj)) # will error : StopIteration

def infini_yield():
    # Can be called only 3 times

    yield "FIRST OUT"

nums_squared_gc = (i ** 2 for i in range(10000)) # Generator expression

from itertools import cycle
cycle([1,2,3]) # returns a generator object that loops forever
```

**Advanced functions**

- *send()* : yields
- *throw()* : returns an error
- *close()* : stops the generator