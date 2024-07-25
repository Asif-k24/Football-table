import React, { useEffect, useState } from 'react'
import '../App.css'

export default function FootballTable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log("Error fetching data:", error))
  }, [])

  const footballData = JSON.stringify(data)

  // console.log({ data })

  return (
    <>
      <div className='container'>
        {/* {footballData.name} */}

        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>1</td>
            <td>Manchester City</td>
            <td>38</td>
            <td>27</td>
            <td>5</td>
            <td>6</td>
            <td>83</td>
            <td>32</td>
            <td>-51</td>
            <td>86</td>
            <td className="form">
              <div>W</div>
              <div>L</div>
              <div>W</div>
              <div>L</div>
              <div>W</div>
            </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </>
  )
}