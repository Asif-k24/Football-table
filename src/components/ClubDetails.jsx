import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import { Link, useParams } from 'react-router-dom';
import '../App.css'

export default function ClubDetails() {

    const { teamId } = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.data.find(team => team.id === + teamId))
    // const detail = useSelector((state) => state)

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const data = state

    console.log(data);

    return (
        <main className='container font-type'>
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            <div style={{ textAlign: "center" }}>
                <img src={data.logo} style={{ borderRadius: "50%", width: "15rem", height: "15rem" }} />
            </div>

            <table className='table-details'>

                <tbody>
                    <tr className='bordered-bottom-row-darkgrey'>
                        <td className='text-left'>Position</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.position}</td>
                    </tr>
                    <tr className='bordered-bottom-row-lightgrey'>
                        <td className='text-left'>Club</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.club}</td>
                    </tr>
                    <tr className='bordered-bottom-row-darkgrey'>
                        <td className='text-left'>Matches played</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.played}</td>
                    </tr>
                    <tr className='bordered-bottom-row-lightgrey'>
                        <td className='text-left'>Matches won</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.won}</td>
                    </tr>
                    <tr className='bordered-bottom-row-darkgrey'>
                        <td className='text-left'>Matches drawn</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.drawn}</td>
                    </tr>
                    <tr className='bordered-bottom-row-lightgrey'>
                        <td className='text-left'> Matches lost</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.lost}</td>
                    </tr>
                    <tr className='bordered-bottom-row-darkgrey'>
                        <td className='text-left'>Goals scored - {data.gf}</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.gf}</td>
                    </tr>
                    <tr className='bordered-bottom-row-lightgrey'>
                        <td className='text-left'>Goals conceded</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.ga}</td>
                    </tr>
                    <tr className='bordered-bottom-row-darkgrey'>
                        <td className='text-left'>Goal difference</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.gd}</td>
                    </tr>
                    <tr className='bordered-bottom-row-lightgrey'>
                        <td className='text-left'>Team points</td>
                        <td className='text-center'>-</td>
                        <td className='text-center'>{data.points}</td>
                    </tr>
                    <tr className='bordered-bottom-row-darkgrey'>
                        <td className="text-left">Team form</td>
                        <td className='text-center'>-</td>
                        <td className='text-center result'>
                            {data.form.map((result, idx) => (
                                <div className={result === 'W' ? "win" : result === 'L' ? 'loss' : 'draw'} key={idx}>{result}</div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='back-link'>
                <Link to={"/"} className='backLink' style={{ textDecoration: 'none' }}>Back</Link>
            </div>

        </main >
    )
}
