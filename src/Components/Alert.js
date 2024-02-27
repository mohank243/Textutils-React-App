import React from 'react'

export default function Alert(probs) {
    
  return (
    // probs.alert will evaluate first if it is null then Right Hand side will not evaluate
    // if it is not null then only right hand side will evaluate
   <div style={{height : '50px'}}>
    {probs.alert && <div>
        <div className={`alert alert-${probs.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{probs.alert.type}</strong> : {probs.alert.message}
        </div>
    </div>}

    </div>
  )
}
