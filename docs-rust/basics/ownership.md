# Ownership

The core ownership rules are 

- **borrow**
- **mutable borrow** 
- **steal**

> When a var's ownership is passed to a function  or block, we say that the data has been `move`d into the function/closure. However, I personally prefer the term data has been *stolen*. Just a little semantics to help me understand the memory model.