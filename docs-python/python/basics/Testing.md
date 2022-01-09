# Testing

General notes for tests and the default `unittest` module.

**Structure:** *TestModule > TestClass > Test*

## Core Rules

1. Tests be created following the [GIVEN-WHEN-THEN](https://martinfowler.com/bliki/GivenWhenThen.html) specification
2. Tests should be created for functional units that API or end users can access and not implementation details
    - For critical implementation details, create tests in a separate (sub)module
3. Tests should be validate and check True +ve, False +ve, True -ve and False -ve based on the use case amnd scenario
4. Mock all external API. If need be, test their output/response independently

## Assertions

- equals & not equals
- called, called with & not called
- Is & Is not
- Is None & Is not None
- Is instance & Is not instance

## Fixtures

- `setUp` and `TearDown` : Called at the  before and after each test
- `setUpClass` and `TearDownClass` : Called at the start of each test class, before and after all test functions within it
- `setUpModule` and `TearDownModule` : Called at the start of each test module, before and after all test classes within it

## Mocks

> Mock vs Patch == Replaces objects from Current Scope vs Imported Scope

Mocks are used to avoid intereference of test code with unrelated code (application code and external dependencies). In python, remember to mock where the function is used and not where it is from

- Function patch

    ```python
    def test_fn():
        with patch("application.testing_location.imported_fn") as patched_function:
            # test logic
    ```

- Multiple patch decorators. They are mapped in LIFO order

    ```python
    @mock.patch('mymodule.os.path')
    @mock.patch('mymodule.os')
    def test_rm(self, mock_os, mock_path): 
        # test logic

    @patch('sys.exit')
    @patch.multiple('__main__', thing=DEFAULT, other=DEFAULT)
    # If you use patch.multiple() as a decorator, then the created mocks are passed by keyword.
    def test_function(mock_exit, other, thing):
        # MagicMock merely populates default values for magic functions
        assert isinstance(thing, MagicMock) 
        assert isinstance(other, MagicMock)
        assert 'exit' in repr(mock_exit)
    ```
    
- Class patch

    ```python
    def test_fn():
        # mock an object of class 
        with patch.object(MyClass, 'method_called', return_value="hi i'm a mock object"):
            # test logic
    ```

- Mock Object

    ```python
    def test_function_c():
        mock_obj = Mock()
        mock_obj.method_in_mocked = Mock(return_value="foo")
        mock_obj.param_in_mocked = "foo"
        # mock.method_in_mocked.call_args[0] # returns params passed to mocked method
    ```

## Skip Tests

- `@unittest.skip(reason)` : Unconditionally skip the decorated test. reason should describe why the test is being skipped.
- `@unittest.skipIf(condition, reason)` : Skip the decorated test if condition is true.
- `@unittest.skipUnless(condition, reason)`: Skip the decorated test unless condition is true.
