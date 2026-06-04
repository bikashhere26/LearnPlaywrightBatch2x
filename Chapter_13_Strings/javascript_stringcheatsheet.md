# JavaScript String Cheat Sheet

## Search & Check
| Method | One-liner example | Result |
|---|---|---|
| `includes()` | `"hello".includes("ell")` | `true` |
| `startsWith()` | `"hello".startsWith("he")` | `true` |
| `endsWith()` | `"hello".endsWith("lo")` | `true` |
| `indexOf()` | `"hello".indexOf("l")` | `2` |
| `lastIndexOf()` | `"hello".lastIndexOf("l")` | `3` |
| `search()` | `"hello".search(/l+/)` | `2` |
| `match()` | `"abc123".match(/\d+/g)` | `["123"]` |
| `matchAll()` | `[..."abc123".matchAll(/\d/g)]` | `['1','2','3']` |
| `localeCompare()` | `"a".localeCompare("b")` | `-1` |

## Extraction & Slicing
| Method | One-liner example | Result |
|---|---|---|
| `slice()` | `"hello".slice(1,4)` | `"ell"` |
| `substring()` | `"hello".substring(1,4)` | `"ell"` |
| `substr()` | `"hello".substr(1,3)` | `"ell"` |
| `split()` | `"a,b,c".split(",")` | `["a","b","c"]` |
| `charAt()` | `"hello".charAt(1)` | `"e"` |
| `charCodeAt()` | `"hello".charCodeAt(1)` | `101` |
| `codePointAt()` | `"😊".codePointAt(0)` | `128522` |

## Transform / Case
| Method | One-liner example | Result |
|---|---|---|
| `toLowerCase()` | `"HELLO".toLowerCase()` | `"hello"` |
| `toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` |
| `normalize()` | `"e\u0301".normalize()` | `"é"` |
| `replace()` | `"hello".replace("l","L")` | `"heLlo"` |
| `replaceAll()` | `"hello".replaceAll("l","L")` | `"heLLo"` |
| `repeat()` | `"ha".repeat(3)` | `"hahaha"` |
| `padStart()` | `"5".padStart(3,"0")` | `"005"` |
| `padEnd()` | `"hi".padEnd(5,".")` | `"hi..."` |
| `concat()` | `"hello".concat(" world")` | `"hello world"` |

## Trim & Whitespace
| Method | One-liner example | Result |
|---|---|---|
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | `"  hi".trimStart()` | `"hi"` |
| `trimEnd()` | `"hi  ".trimEnd()` | `"hi"` |

## Conversion & Info
| Method / Property | One-liner example | Result |
|---|---|---|
| `toString()` | `("hello").toString()` | `"hello"` |
| `valueOf()` | `("hello").valueOf()` | `"hello"` |
| `length` | `"hello".length` | `5` |

> Use primitive strings like `"hello"` normally; JavaScript boxes them internally to expose these methods when needed.
