const originalPrepare = Error.prepareStackTrace
Error.prepareStackTrace = noOpPrepareStackTrace
const stack = new Error().stack
Error.prepareStackTrace = originalPrepare

console.log(stack)

function noOpPrepareStackTrace (err, stack) {
  return stack
}
