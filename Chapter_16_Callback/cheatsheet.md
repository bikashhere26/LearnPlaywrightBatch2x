# Callback Function Cheatsheet

## What is a callback?

A callback is a function you give to another function so it can call it later.

Think of it like telling a friend:
- “When you finish your homework, call me.”
- Your friend does the homework first.
- Then your friend calls you.

In code, one function does work, and another function is called after the work is done.

---

## Simple example

```js
function sayHello() {
  console.log("Hello!");
}

function doHomework(callback) {
  console.log("Doing homework...");
  callback();
}

doHomework(sayHello);
```

### What happens
1. `doHomework` starts.
2. It prints: `Doing homework...`
3. Then it calls `callback()`
4. Since we passed `sayHello`, it prints: `Hello!`

---

## In 5th grade terms

- `doHomework` = your friend
- `sayHello` = the message you want your friend to say later
- `callback` = the instruction your friend keeps for later

So a callback is just “a function used as a later instruction.”
