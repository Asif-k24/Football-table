import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/dataSlice';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ClubLogo from "../assets/data"
import '../App.css';
import '../components/Modal/Modal.css'

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, data }) => {
  // console.log({ data })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Team Details"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose}>Close</button>
      <div>
        <h2 className='text-center'>Details for {data?.club}</h2>

        <table className='table-details'>

          <tbody>
            <tr className='bordered-bottom-row-darkgrey'>
              <td className='text-left'>Position</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.position}</td>
            </tr>
            <tr className='bordered-bottom-row-lightgrey'>
              <td className='text-left'>Club</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.club}</td>
            </tr>
            <tr className='bordered-bottom-row-darkgrey'>
              <td className='text-left'>Matches played</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.played}</td>
            </tr>
            <tr className='bordered-bottom-row-lightgrey'>
              <td className='text-left'>Matches won</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.won}</td>
            </tr>
            <tr className='bordered-bottom-row-darkgrey'>
              <td className='text-left'>Matches drawn</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.drawn}</td>
            </tr>
            <tr className='bordered-bottom-row-lightgrey'>
              <td className='text-left'> Matches lost</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.lost}</td>
            </tr>
            <tr className='bordered-bottom-row-darkgrey'>
              <td className='text-left'>Goals scored</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.gf}</td>
            </tr>
            <tr className='bordered-bottom-row-lightgrey'>
              <td className='text-left'>Goals conceded</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.ga}</td>
            </tr>
            <tr className='bordered-bottom-row-darkgrey'>
              <td className='text-left'>Goal difference</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.gd}</td>
            </tr>
            <tr className='bordered-bottom-row-lightgrey'>
              <td className='text-left'>Team points</td>
              <td className='text-center'>-</td>
              <td className='text-center'>{data?.points}</td>
            </tr>
            <tr className='bordered-bottom-row-darkgrey'>
              <td className="text-left">Team form</td>
              <td className='text-center'>-</td>
              <td className='text-center result'>
                {data?.form.map((result, idx) => (
                  <div className={result === 'W' ? "win" : result === 'L' ? 'loss' : 'draw'} key={idx}>{result}</div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default function FootballTable() {

  const dispatch = useDispatch();
  const { loading, error, processedData } = useSelector((state) => state.data);
  // const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const specificBorderRows = [1, 4, 5, 17]; // Indices of rows to have the specific border color

  useEffect(() => {
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

            {<tbody>

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
                        {/* <Link className='link-style' to={`/club-details/` + index}> */}
                        <button onClick={() => handleRowClick(team)} className='button-style' style={{ all: 'unset', cursor: 'pointer' }}>
                          <div>
                            {team.club}
                          </div>
                        </button>
                        {/* </Link> */}
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
            </tbody>}

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