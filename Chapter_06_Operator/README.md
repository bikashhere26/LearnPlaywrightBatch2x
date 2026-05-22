# Chapter 06: JavaScript Operators

Welcome to **Chapter 06: JavaScript Operators**! This chapter provides a comprehensive guide to understanding all the different types of operators in JavaScript, from basic arithmetic to advanced comparison operations.

## 📚 Topics Covered

### 1. **Assignment Operators** (`30_Assignment_Operators.js`)
Learn how to assign values to variables using various assignment operators:
- `=` (simple assignment)
- `+=`, `-=`, `*=`, `/=` (compound assignments)
- `%=`, `**=` (modulus and exponentiation assignments)

### 2. **Arithmetic Operators** (`31_Arithmetic_Operator.js`)
Master the fundamental mathematical operations:
- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)
- `%` (modulus/remainder)
- `**` (exponentiation)

### 3. **Modulus Operator** (`32_Modulus_Op.js`)
Deep dive into the modulus operator (`%`):
- Understanding remainders
- Common use cases (checking even/odd, cycling patterns)

### 4. **Exponentiation Operator** (`33_Expo_OP.js`)
Explore the exponentiation operator (`**`):
- Calculating powers
- Comparing with `Math.pow()`

### 5. **Interview Questions** (`34_IQ.js`)
Practice interview-style questions on arithmetic operators

### 6. **Comparison Operators** (`35_Comparision_Operator.js`)
Learn how to compare values:
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal)
- `<=` (less than or equal)
- `==` (loose equality)
- `!=` (loose inequality)

### 7. **Strict vs Loose Comparison** (`36_Comparsion_Strict_loose.js`)
Understand the critical difference between:
- `==` (loose equality, with type coercion)
- `===` (strict equality, no coercion)
- `!=` (loose inequality)
- `!==` (strict inequality)

### 8. **IQ: Loose vs Strict** (`37_IQ_Loose_Strict.js`)
Interview-style questions on loose vs strict equality

### 9. **Confusing Comparisons** (`38_confusing_comparision.js`)
Explore tricky and counterintuitive comparison behaviors:
- Empty strings vs zero
- `null` vs `undefined`
- Booleans coercing to numbers
- NaN edge cases
- Object/Array comparisons
- Whitespace handling

### 10. **Logical Operators** (`39_logical_op.js`)
Learn boolean logic:
- `&&` (AND)
- `||` (OR)
- `!` (NOT)

### 11. **String Concatenation Operator** (`40_string_con_op.js`)
Master string combining techniques:
- `+` operator for concatenation
- Type coercion with strings

### 12. **Ternary Operator** (`41_Ternary_Op.js`)
Conditional operations in one line:
- Syntax: `condition ? trueValue : falseValue`
- Nested ternary operators

### 13. **typeof Operator** (`42_TypeOf_Op.js`)
Determine the type of a value:
- `typeof` returns a string representing the type
- Special cases and quirks

### 14. **Increment/Decrement Operators** (`43_Incre_Decre_Op.js`)
Pre and post increment/decrement operations:
- `++` (increment)
- `--` (decrement)

### 15. **Nullish Coalescing Operator** (`44_Null_Op.js`)
Handle null/undefined values gracefully:
- `??` (nullish coalescing)
- Difference from `||`

### 16. **Post-Increment Behavior** (`45_Post_Increment.js`)
Deep dive into post-increment semantics:
- Return value vs side effects

### 17. **IQ: Increment/Decrement** (`46_IQ_INCREMENT_D.js`)
Interview-style questions on increment/decrement operators

### 18. **Advanced Topics** (`47_Advance_ID_.js`)
Advanced operator concepts and edge cases

## 🔑 Key Concepts

### Operator Precedence
When multiple operators are used in an expression, JavaScript follows a specific order of operations. Some operators have higher precedence than others.

### Type Coercion
JavaScript often converts (coerces) values from one type to another when performing operations. This is especially important in loose comparison (`==`) where unexpected results can occur.

### Pre-increment vs Post-increment
```js
let a = 5;
console.log(a++);  // returns 5, then increments (post-increment)
console.log(++a);  // increments first, then returns (pre-increment)
```

## 🚀 Running the Examples

To run any file in this chapter:

```bash
node 30_Assignment_Operators.js
node 38_confusing_comparision.js
# ... or any other file
```

## 💡 Best Practices

1. **Always use `===` instead of `==`** to avoid unexpected type coercion
2. **Use `??` (nullish coalescing)** instead of `||` for more predictable null/undefined handling
3. **Be aware of operator precedence** and use parentheses for clarity
4. **Understand the difference between pre and post increment/decrement** operators
5. **Use parentheses** when combining different types of operators for readability

## 📖 Common Pitfalls

- `null == undefined` returns `true` (loose equality)
- `null === undefined` returns `false` (strict equality)
- `[] == ![]` returns `true` (confusing coercion)
- `NaN == NaN` returns `false` (NaN is not equal to itself)
- Whitespace strings coerce to `0`: `" " == 0` returns `true`

## 📝 Interview Preparation

This chapter includes multiple "IQ" files with interview-style questions. Practice these to prepare for technical interviews where operator knowledge is tested.

## 🔗 Next Steps

After mastering operators, continue to:
- Chapter 07: Control Flow (if/else, switch statements)
- Chapter 08: Loops (for, while, do-while)
- Chapter 09: Functions and Scope

---

**Happy Learning!** 🎉
