'use client'
import { useEffect, useState } from "react"

const Counter = () => {

 const [value, setValue] = useState(0)



    setInterval(() => {
        setValue(value + 1)
     },1000)

     console.log('rendering', value);
     

  return (
    <div>
        <button onClick={() => setValue(value + 1)}>Add</button>
        <p className="bg-green-500">{value}</p>
    </div>
  )
}

export default Counter