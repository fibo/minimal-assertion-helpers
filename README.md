# minimal-assertion-helpers

> provides few test helpers

This package is implemented with ECMAScript modules. CommonJS is not supported.

## Synopsis

```ts
import { describe, test } from "node:test"
import { MaybeObject, objectTypeGuard } from "minimal-type-guard-helpers"
import { assertEqual } from "minimal-assertion-helpers"

type Foo = { bar: string }

const isFoo = objectTypeGuard<Foo>(({ bar }) => {
  return typeof bar === "string"
})

describe("isFoo", () => {
  test("validates Foo", () => {
    assertEqual<MaybeObject<Foo>, boolean>(isFoo, [
      {
        input: {
          foo: "string"
        },
        output: true
      },
      {
        input: {
          foo: 42
        },
        output: false
      },
      {
        input: {},
        output: false
      }
    ])
  })
})
```

## See also

- [minimal-type-guard-helpers](https://npm.im/minimal-type-guard-helpers)

## License

[MIT](https://fibo.github.io/mit-license)
