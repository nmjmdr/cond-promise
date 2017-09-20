function conditionalPromise(phrase) {
  let cond = phrase
  let onTrue;

  const otherwise = (onFalse) =>{
    let outcome
    return cond()
    .then((isMet)=>{
      outcome = isMet
      return isMet? onTrue() : onFalse()
    })
   .then((result)=>{
     return {
       outcome: outcome,
       result: result
     }
   })
  }
  const ifTrue = (t) => {
    onTrue = t
    return {
      otherwise: otherwise
    }
  }
  return {
    ifTrue: ifTrue
  }
}

module.exports = {
  conditionalPromise: conditionalPromise
}
