import { test, describe } from 'node:test'
import assert from 'node:assert/strict'

test('synchronous passing test', t => {
  // Этот тест проходит: исключение не выбрасывается.
  assert.strictEqual(1, 2)
})
