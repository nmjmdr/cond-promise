# To execute conditional logic that uses promises

## example
function someCheck() {
  return Promise.resolve(true)
}

function something() {
  return Promise.resolve({
    ok: true
  })
}

function somethingElse() {
  return Promise.resolve({
    ok: false
  })
}

function handler() {
  conditionalPromise(someCheck).ifTrue(something).otherwise(somethingElse)
  .then((r)=>{
    if(r.outcome) {
      console.log("Condition met, result: ",r.result)
    } else {
      console.log("Condition not met, result: ",r.result)
    }
  })
}

handler()
