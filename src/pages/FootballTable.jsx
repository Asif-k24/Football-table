import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/dataSlice';
import { ModalComponent } from '../components/Modal/Modal';
import Modal from 'react-modal';
import ClubLogo from "../assets/data.json"
import '../App.css';
import '../components/Modal/Modal.css'

Modal.setAppElement('#root');

export default function FootballTable() {

  const dispatch = useDispatch();
  const { loading, error, processedData } = useSelector((state) => state.data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const specificBorderRows = [1, 4, 5, 17]; // Indices of rows to have the specific border color

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // const tableData = CalculateLeagueTable(data);

  const handleRowClick = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTeam(null);
  };

  return (
    <>
      <div className='font-type'>

        <main className='container'>
          <h1 className='text-center'>Premier League Table 2020/2021</h1>
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
                processedData?.map((team, index) => {

                  // const handleCLick = () => {
                  //   navigate('/club-details/' + index)
                  // }
                  const isSpecificBorderRow = specificBorderRows.includes(index + 1)
                  const rowClass = isSpecificBorderRow ? "bordered-bottom-row-darkgrey" : "bordered-bottom-row-lightgrey"
                  // console.log(team)

                  return (

                    <tr key={index} className={rowClass}>
                      <td className='text-center'>{index + 1}</td>
                      <td className='align-items'>
                        {
                          ClubLogo.logo[team.club] ? (
                            <img style={{ width: "20px", borderRadius: "50%", marginRight: "8px" }} src={'/' + ClubLogo.logo[team.club]} alt="" />
                          ) : ('No Logo')
                        }
                        <button onClick={() => handleRowClick(team)} className='button-style' style={{ all: 'unset', cursor: 'pointer' }}>
                          <div>
                            {team.club}
                          </div>
                        </button>
                      </td>
                      <td className='text-center'>{team.played}</td>
                      <td className='text-center'>{team.won}</td>
                      <td className='text-center'>{team.drawn}</td>
                      <td className='text-center'>{team.lost}</td>
                      <td className='text-center'>{team.gf}</td>
                      <td className='text-center'>{team.ga}</td>
                      <td className='text-center'>{team.gd}</td>
                      <td className='text-center'>{team.points}</td>
                      <td className="text-center">
                        <div className='result'>
                          {team.form.map((result, idx) => (
                            <div className={result === 'W' ? "win" : result === 'L' ? 'loss' : 'draw'} key={idx}>{result}</div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>

          <ModalComponent
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            data={selectedTeam}
          />

        </main>
      </div>
    </>
  )
}