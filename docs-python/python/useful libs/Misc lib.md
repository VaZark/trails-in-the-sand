# Miscellaneous Libraries

## Arrow - Datetime libraty

Arrow is a library that unifies the different built-in modules that a developer has to juggle to manage datetime in any python application. It is UTC by default, is timezone aware and respects the ISO 8601 standard.


```python
# Common commands

## Now
utc = arrow.utcnow() # => 2013-05-11T21:23:58.970460+00:00

## Timedelta
utc = utc.shift(hours=-1)

## Replace/Update select props
new_utc = arw.replace(hour=4, minute=40)

## Switch timezone
local = utc.to('US/Pacific')

## Formatting
local.format('YYYY-MM-DD HH:mm:ss ZZ')

local.humanize() # => 'an hour ago'


## Range
arrow.utcnow().span('hour') # => (<Arrow [2013-05-07T05:00:00+00:00]>, <Arrow [2013-05-07T05:59:59.999999+00:00]>)

```

## Fire - CLI Generator

A google library to create CLI in python. Fire can take any object/function as input and convert to CLI. We can considered it like a debugger that has been repurposed to be a CLI generator


```python
# Class
import fire

class Calculator(object):
  """A simple calculator class."""

  def double(self, number):
    return 2 * number

if __name__ == '__main__':
  fire.Fire(Calculator)

## python calculator.py double --number=15  
## python calculator.py double 10

# Function
import fire

def hello(name="World"):
  return "Hello %s!" % name

if __name__ == '__main__':
  fire.Fire(hello)

## python hello.py 
## python hello.py --name=David
```