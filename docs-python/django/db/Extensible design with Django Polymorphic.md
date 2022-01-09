# Extensible design with Django Polymorphic

## Abstract Tables

Abstract tables are a useful baseline when the system needs to apply inheritance and Object-Oriented concepts to databases. It gives the inherting tables a common set of fields to derive and have.

However, these are still *abstract* tables and do not exist in the database. So operations like query lookups cannot be applied on them.

## Abstract as Intermediaries

Abstract tables are extremely useful when implemented as an intermediary table in an inheritance.

When used with *django-polymorphic*, an abstract table can be used to group specific inheriting tables. Since it is abstract, the child table with have the fields from the root parent and the abstract table. However, now we can use the *instance_of* filter and query items based on the grouping we've assigned to them.

![Concept Diagram](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW1Byb2R1Y3RdIC0tPiBCKFNlcnZpY2VfQWJzdHJhY3QpXG4gICAgQSAtLT4gQyhTdG9ja19BYnN0cmFjdClcbiAgICBCIC0tPiBGW1NhbGVdXG4gICAgQiAtLT4gR1tTdWJzY3JpcHRpb25dXG4gICAgQyAtLT4gSFtFbnRyZXByaXNlXVxuICAgIEMgLS0-IElbSG9tZW1hZGVdIiwibWVybWFpZCI6eyJkYXJrTW9kZSI6dHJ1ZSwidGhlbWUiOiJiYXNlIn0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)


A structure as depicted above, can be used to maintain high degree of flexibility. granular degree of modularity and generic functional extensibilty within the model relations.