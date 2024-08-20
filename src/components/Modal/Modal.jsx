import Modal from 'react-modal';
import React from 'react'

export const ModalComponent = ({ isOpen, onRequestClose, data }) => {
    // console.log(data)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Team Details"
            className="modal"
            overlayClassName="overlay"
        >
            <button style={{ float: 'right' }} onClick={onRequestClose}>X</button>
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
                            <td className='text-center'>
                                <div className="result">
                                    {data?.form.map((result, idx) => (
                                        <div className={result === 'W' ? "win" : result === 'L' ? 'loss' : 'draw'} key={idx}>{result}</div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Modal>
    );
};
