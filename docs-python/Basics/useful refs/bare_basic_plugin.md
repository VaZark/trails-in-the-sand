# Basic Plugin

This is super basic plugin architecture is useful when you need hashmap style action list of classes that conform to a standard and in turn allow you to call and execute them anywhere in the program

```python
class IAction:
    def run(self, data=None, *args, **kwargs):
        raise NotImplementedError("Missing implementation")


class ActionMount:

    registered_actions = {}

    def register(self, id, ExceutableClass: IAction):
        if id in self.registered_actions.keys():
            raise Exception("Action with this id already exists")
        
        print(f"Registering {id}")

        self.registered_actions[id] = ExceutableClass

    def get_action(self, id):
        if id not in self.registered_actions.keys():
            raise Exception("Action with this id does not exist")

        return self.registered_actions[id]

    def delete_action(self, id):
        if id not in self.registered_actions.keys():
            raise Exception("Action with this id does not exist")

        del self.registered_actions[id]
```