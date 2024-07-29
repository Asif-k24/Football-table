import React, { useEffect, useState } from 'react'
import '../App.css'

export default function FootballTable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data);
      })
      .catch(err => {
        console.log("Error fetching data:", err)
      })
  }, [])

  const footballData = JSON.stringify(data)

  return (
    <>
      <div className='font-type'>

        <main className='container'>
          <table className='table-margin'>
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
                <td className='text-center'></td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>
              <tr>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
                <td className='text-center'>asdafs</td>
              </tr>


              {/* {
                data.map((team, index) => {
                  console.log(team)
                  return (
                    <tr key={index}>
                      <td className='text-center'>{team.position}</td>
                      <td>{team.club}</td>
                      <td className='text-center'>{team.played}</td>
                      <td className='text-center'>{team.won}</td>
                      <td className='text-center'>{team.drawn}</td>
                      <td className='text-center'>{team.lost}</td>
                      <td className='text-center'>{team.gf}</td>
                      <td className='text-center'>{team.ga}</td>
                      <td className='text-center'>{team.gd}</td>
                      <td className='text-center'>{team.points}</td>
                      <td className="form">
                        {team.form.map((result, idx) => (
                          <div key={idx}>{result}</div>
                        ))}
                      </td>
                    </tr>
                  )
                })
              } */}
            </tbody>
            
          </table>
        </main>

      </div>
    </>
  )
}