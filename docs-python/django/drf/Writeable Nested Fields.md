# Writeable Nested Fields

DRF by default and intentional choice does not provide Create and update logic for nested fields. This is due to reasoning that the nested fields are customized to the needs of the service and varies application to application.

While this indeed the case, most application usually have a CRUD service that just needs to update their nested serializer/related tables.

The most relevant library for it is the `drf-writable-nested` found [here](https://github.com/beda-software/drf-writable-nested)

It merely replaces the standard `ModelSerializer` with `WritableNestedModelSerializer` and magic.