import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../redux/actions';
import { Link, useParams } from 'react-router-dom';
import '../App.css'


export default function ClubDetails() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div className='container'>
            

            <Link to={"/"}>Back</Link>
        </div>
    )
}
