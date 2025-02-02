import React from 'react'

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        //Next js 15
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
}

const page = async () => {
    const data = await getData();
    console.log("Data", data)
  return (
    <div>
        <h1>Server Components</h1>
        {data.title}
    </div>
  )
}

export default page
