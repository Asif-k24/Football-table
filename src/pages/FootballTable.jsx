import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../App.css'

export default function FootballTable() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data)
  const specificBorderRows = [1, 4, 5, 17]; // Indices of rows to have the specific border color

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then(res => res.json())
  //     .then(jsonData => {
  //       if (jsonData.matches) {
  //         setData(jsonData.matches)
  //       } else {
  //         console.log("No matches found");
  //       }
  //     })
  //     .catch(error => console.log("Error fetching data:", error))
  // }, [])

  // const footballData = JSON.stringify(data)
  return (
    <>
      <div className='font-type'>

        <main className='container'>
          {/* {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>} */}
          <table className='table-margin'>
            <thead>
              <tr>
                <th>Position</th>
                <th className='th-club'>Club</th>
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

              {
                data.map((team, index, id) => {

                  const isSpecificBorderRow = specificBorderRows.includes(index + 1)
                  const rowClass = isSpecificBorderRow ? "bordered-bottom-row-darkgrey" : "bordered-bottom-row-lightgrey"
                  // console.log(team)

                  return (

                    <tr key={index} className={rowClass}>
                      <td className='text-center'>{team.position}</td>
                      <td className='align-items'>
                        <img src={team.logo} style={{ width: "20px", borderRadius: "50%", marginRight: "8px" }} />
                        <Link className='link-style' to={`/club-details/` + team.id}>
                          <div>
                            {team.club}
                          </div>
                        </Link>
                      </td>
                      <td className='text-center'>{team.played}</td>
                      <td className='text-center'>{team.won}</td>
                      <td className='text-center'>{team.drawn}</td>
                      <td className='text-center'>{team.lost}</td>
                      <td className='text-center'>{team.gf}</td>
                      <td className='text-center'>{team.ga}</td>
                      <td className='text-center'>{team.gd}</td>
                      <td className='text-center'>{team.points}</td>
                      <td className="result">
                        {team.form.map((result, idx) => (
                          <div className={result === 'W' ? "win" : result === 'L' ? 'loss' : 'draw'} key={idx}>{result}</div>
                        ))}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>
        </main>

      </div>
    </>
  )
}