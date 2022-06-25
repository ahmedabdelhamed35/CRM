import React, { useState } from 'react'
import './test.css'

export default function Text() {
    const [product,setproduct] = useState(
      [
        
          {id:'mohamed' , age:22 , work: 'xww'},
          {id:'ahmed' , age:23 , work: 'xww'},
          {id:'asdwq' , age:24 , work: 'xww'}
        
      ]
    )




    const chh = () =>{
      setproduct('mouse')
    }

  return (
    <div className='test'><div>

      {product.map(prod=> <span key={prod.id}>{prod.id}</span>)}

    </div>




    <button onClick={chh}>change</button>
    </div> 
    
  )
}
