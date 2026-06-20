learning Promise with examples

1. Promise is a constructor function that takes a function as an argument

2. The function takes two arguments: resolve and reject

3. The resolve function is called when the promise is fulfilled
4. The reject function is called when the promise is rejected    
5. The promise object has three states: pending, fulfilled, and rejected

6. The promise object has a then method that takes two arguments: onFulfilled and onRejected
7. The onFulfilled function is called when the promise is fulfilled
8. The onRejected function is called when the promise is rejected

Promise.all vs Promise.allSettled

| Feature | Promise.all | Promise.allSettled |
|---|---|---|
| Input | Array (or iterable) of promises | Array (or iterable) of promises |
| Outcome | Resolves only if all promises resolve | Always resolves after all promises settle |
| Reject behavior | Rejects immediately on first rejection | Never rejects; returns status for every promise |
| Result value | Array of resolved values | Array of objects with `status` and `value`/`reason` |
| Error handling | Single rejection can stop all | Keeps all results, including failures |
| Use case | When all results are required and failure should abort | When you need every result and want to inspect each outcome |
| Example output | `[1, 2, 3]` | `[{status:"fulfilled",value:1},{status:"rejected",reason:Error}]` |


