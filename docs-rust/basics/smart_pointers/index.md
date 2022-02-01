# Smart Pointers on Rust

1. Box
2. Rc & Arc
3. Cell & RefCell
4. Mutex

## Box

- Plain Heap Allocation
- `Clone` copies the ref and the data
- Value is dropped when it goes out of scope 

## Rc (Reference Counter)

- Creates reference to data on heap
- Updates the ref counter with every `Clone`
- Goes out of scope only after every borrowed ref is out of scope
- Arc is the thread safe version 