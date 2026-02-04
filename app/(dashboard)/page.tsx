'use client'

import { useEffect, useState } from "react"

const page = () => {
const [price,setPrice] = useState(0)
const [value, setValue] = useState(0)

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
},[price])
  return (
 <>
    <div>
        <button onClick={() => setPrice(price + 1)}>Add</button>
        <input type="text" placeholder="bla bla " value={price}/>
        <button onClick={() => setPrice(price - 1)}>Decrement</button>
    </div>
    <div>
        <button onClick={() => setValue(value + 1)}>Add</button>
        <input type="text" placeholder="bla bla " value={value}/>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>

    </>
  )
}

export default page