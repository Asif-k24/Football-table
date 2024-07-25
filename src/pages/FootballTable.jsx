import React, { useEffect, useState } from 'react'

export default function FootballTable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log("Error fetching data:", error))
  }, [])

  const footballData = JSON.stringify(data)

  console.log({ data })

  return (
    <>
      <div>
        {footballData.name}
      </div>
    </>
  )
}