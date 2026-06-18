# 2D Array Loop Cheatsheet

## How Nested Loops Work for 2D Matrix Traversal

### The Matrix Structure
```
    Col 0  Col 1  Col 2
Row 0: [1,     2,     3]
Row 1: [4,     5,     6]
Row 2: [7,     8,     9]
```

### Code Example
```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

## Loop Breakdown

### Outer Loop: `for (let i = 0; i < matrix.length; i++)`
- **Purpose:** Iterate through **rows**
- **matrix.length:** 3 (number of rows)
- **Variable `i`:** Goes 0 → 1 → 2
- **Represents:** Which row we're currently working on

### Inner Loop: `for (let j = 0; j < matrix[i].length; j++)`
- **Purpose:** Iterate through **columns** in the current row
- **matrix[i].length:** 3 (number of elements per row)
- **Variable `j`:** Goes 0 → 1 → 2 (for each row)
- **Represents:** Which column/element in the current row

## Execution Flow

```
i = 0 (Row 0: [1, 2, 3])
  ├─ j = 0: matrix[0][0] = 1   ✓ Print
  ├─ j = 1: matrix[0][1] = 2   ✓ Print
  └─ j = 2: matrix[0][2] = 3   ✓ Print

i = 1 (Row 1: [4, 5, 6])
  ├─ j = 0: matrix[1][0] = 4   ✓ Print
  ├─ j = 1: matrix[1][1] = 5   ✓ Print
  └─ j = 2: matrix[1][2] = 6   ✓ Print

i = 2 (Row 2: [7, 8, 9])
  ├─ j = 0: matrix[2][0] = 7   ✓ Print
  ├─ j = 1: matrix[2][1] = 8   ✓ Print
  └─ j = 2: matrix[2][2] = 9   ✓ Print
```

## Output

### Current Output (Each element on new line)
```
1
2
3
4
5
6
7
8
9
```

### Matrix Format Output (3 Ways)

#### Method 1: Print each row as an array
```javascript
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
}
```
**Output:**
```
[ 1, 2, 3 ]
[ 4, 5, 6 ]
[ 7, 8, 9 ]
```

#### Method 2: String concatenation per row
```javascript
for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + " ";
  }
  console.log(row);
}
```
**Output:**
```
1 2 3
4 5 6
7 8 9
```

#### Method 3: Using console.table() (Best for visualization)
```javascript
console.table(matrix);
```
**Output:**
```
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │
│    1    │ 4 │ 5 │ 6 │
│    2    │ 7 │ 8 │ 9 │
└─────────┴───┴───┴───┘
```

#### Method 4: Using join() for formatting ⭐ Most Flexible
```javascript
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}
```
**Output:**
```
1 2 3
4 5 6
7 8 9
```

### Deep Dive: Understanding join()

#### What is join()?
`join()` is a **built-in JavaScript array method** that:
- Converts all array elements into a **single string**
- **Separates** elements with a **specified separator**
- Returns the resulting string (doesn't modify original array)

#### Syntax
```javascript
array.join(separator)
```
| Parameter | Description | Default |
|-----------|-------------|---------|
| `separator` | String to place between elements | `","` (comma) |

#### How join() Works Step-by-Step

**For a single row: `[1, 2, 3]`**

```javascript
const row = [1, 2, 3];
console.log(row.join(" "));  // Output: "1 2 3"
```

**Process:**
1. Takes first element: `1`
2. Adds separator: `" "`
3. Takes second element: `2`
4. Adds separator: `" "`
5. Takes third element: `3`
6. Result: `"1 2 3"` (as a string)

#### Different Separator Examples

```javascript
const row = [1, 2, 3];

row.join(" ");        // "1 2 3"
row.join("-");        // "1-2-3"
row.join(", ");       // "1, 2, 3"
row.join(" | ");      // "1 | 2 | 3"
row.join("");         // "123"
row.join("\t");       // "1	2	3"  (with tabs)
```

#### Complete Matrix Example with Different Separators

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("--- Separator: Space ---");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}

console.log("--- Separator: Comma ---");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(","));
}

console.log("--- Separator: Tab ---");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join("\t"));
}

console.log("--- Separator: Pipe ---");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" | "));
}
```

**Output:**
```
--- Separator: Space ---
1 2 3
4 5 6
7 8 9

--- Separator: Comma ---
1,2,3
4,5,6
7,8,9

--- Separator: Tab ---
1	2	3
4	5	6
7	8	9

--- Separator: Pipe ---
1 | 2 | 3
4 | 5 | 6
7 | 8 | 9
```

#### Why Use join()?

| Advantage | Explanation |
|-----------|-------------|
| **Cleaner code** | One method instead of manual string concatenation |
| **Flexible formatting** | Change separator without changing loop logic |
| **Better performance** | More efficient than += string concatenation |
| **Readable output** | Easy to create nicely formatted output |
| **One-liner** | Can use in single line for simple cases |

#### join() vs Manual String Concatenation

**Using join() (Recommended):**
```javascript
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" "));
}
```

**Manual concatenation (Old way):**
```javascript
for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + " ";
  }
  console.log(row);
}
```

✅ `join()` is **cleaner, faster, and more maintainable**

## Key Concepts

✅ **Outer loop** accesses each **row** (matrix[i])

✅ **Inner loop** accesses each **element within that row** (matrix[i][j])

✅ Together they create **complete traversal** of all elements

✅ **Total iterations:** Rows × Columns = 3 × 3 = 9 iterations

## Quick Reference

| Variable | Range | Represents |
|----------|-------|-----------|
| `i` | 0 to 2 | Row index |
| `j` | 0 to 2 | Column index |
| `matrix[i][j]` | Any element | Specific element at row i, column j |
| `matrix.length` | 3 | Number of rows |
| `matrix[i].length` | 3 | Number of columns in row i |

## Analogy
Think of it like **reading a table:**
- The **outer loop** moves you down to each **row** (next line)
- The **inner loop** moves you right through each **column** (next cell) in that row
- You read every cell by doing this systematically
