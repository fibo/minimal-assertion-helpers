import { strict as assert } from "node:assert"

type Value = Parameters<typeof JSON.stringify>[0]

export const assertDeepEqual = <Input extends Value, Output extends Value>(
  func: Function,
  testData: Array<{ input: Input; output: Output }>
) => {
  for (const { input, output } of testData)
    assert.deepEqual<Output>(
      func(input),
      output,
      `${func.name}(${JSON.stringify(input, null, 2)}) !== ${JSON.stringify(
        output,
        null,
        2
      )}`
    )
}

export const assertEqual = <Input extends Value, Output extends Value>(
  func: Function,
  testData: Array<{ input: Input; output: Output }>
) => {
  for (const { input, output } of testData)
    assert.deepEqual<Output>(
      func(input),
      output,
      `${func.name}(${JSON.stringify(input, null, 2)}) !== ${JSON.stringify(
        output
      )}`
    )
}
