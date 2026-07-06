# Chapter 26 Cheat Sheet

## Why `export {}` resolves the `Cannot redeclare block-scoped variable` error

In TypeScript, a file can be treated as either:
- a **script** (global scope), or
- a **module** (file scope)

If a file has no imports or exports, TypeScript treats it as a script. Then all top-level declarations are placed into the global scope shared by every file.

### The problem
When two files both declare:

```ts
let unknown: unknown = "hello";
```

and neither file is a module, TypeScript puts both declarations into the same global scope. That causes a conflict because:
- `let` is block-scoped
- a block-scoped variable cannot be declared twice in the same scope

### What `export {}` does
Adding:

```ts
export {};
```

does not actually export any value. Its main effect is to make the file a module.

As a module:
- the file gets its own private top-level scope
- top-level names are not shared globally
- `let unknown` becomes local to that file only

So `196_TS_Part2.ts` and `197_TS_Part2.ts` can each have their own `unknown` without colliding.

### Simple analogy
- Script files = everyone writes on the same blackboard
- Module files = each student gets their own notebook

`export {}` is like saying: “I want my own notebook,” so your top-level variable names stop colliding with other files.

### Better practice
Avoid using `unknown` as a variable name because `unknown` is also a TypeScript type. Use a clearer name like `unknownValue` or `safeValue`.
