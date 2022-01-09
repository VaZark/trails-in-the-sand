# Custom Actions

## Adding action to List

When you need to add an action to perform on the selected items on the admin list view.

```python
# Admin.py
def new_action(modeladmin, request, queryset):
    for item in queryset:
        # action logic
new_action.short_description = 'Action Description'

@admin.register(Model)
class ModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'list_item']
    actions = [new_action, ]
```

## Adding action to Detail

When you need to add an action to perform on a model detail view

1. Create a Custom Form Template

    ```html
    <!-- admin/custom_modelform.html : Within the default templates folder -->
    {% extends 'admin/change_form.html' %}

    {% block submit_buttons_bottom %}
        {{ block.super }}
        <div class="submit-row">
            <input type="submit" value="Action 1" name="_unique-action_1">
            <input type="submit" value="Action 2" name="_unique-action_2">
        </div>
    {% endblock %}
    ```

2. In the associated admin class, override to the use the new template and define the action

    ```python
    # Admin.py
    @admin.register(Model)
    class ModelAdmin(admin.ModelAdmin, ExportCsvMixin):
        # ...
        change_form_template = "admin/custom_modelform.html"

        def response_change(self, request, obj):
            if "_unique-action_1" in request.POST:
                # Action logic
                self.message_user(request, "Action 1 message")
                return HttpResponseRedirect(".")

            elif "_unique-action_2" in request.POST:
                # Action logic
                self.message_user(request, "Action 2 message")
                return HttpResponseRedirect(".")
                
            return super().response_change(request, obj)
    ```