"use client"

import {useState, useEffect} from 'react'

const page = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

   

    useEffect(() => {
      const data = fetch("https://jsonplaceholder.typicode.com/todos/1", {
        cache: "no-store",
      })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.title)
        setIsLoading(false)
      })
    }, [])

    console.log("Data", products)


  return (
    <div>
      <h1>Client Components</h1>
      {isLoading? <p>Loading...</p> : <h1>{products}</h1>}
    </div>
  )
}

export default page
