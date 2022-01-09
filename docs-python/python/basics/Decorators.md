# Decorators

These are functional equivalents to mixins. They are used to run some addititonal logic on top of the function they are binded/called upon.

They essentially replicate function currying but in a pythonic fashion.

## Model to create a new decorator

```python

## Without Arguments
def decorator(func):
    def inner():
        print("I got decorated")
        func()
    return inner

## With Arguments
def decorator_factory(attempts, fail_silently):
    def decorator(func):

        def wrapper(*args, **kwargs):
            # pre-logic
            func(*args, **kwargs)
            # post-logic
        
        return wrapper
    return decorator
```

## References

### Retry Decorator
```python
def retry(attempts, fail_silently):
    # Call with @retry(attempts=int, fail_silenty=bool)
    def decorator(func):
        def wrapper(*args, **kwargs):
            current_attempt = 0
            while current_attempt < attempts:
                try:
                    print('attmpt no',current_attempt)
                    func(*args, **kwargs)
                    break
                except Exception as e:
                    current_attempt +=1
                    if current_attempt == attempts:
                        err_msg = traceback.format_exc()
                        if not fail_silently:
                            raise e
        return wrapper
    return decorator
```
