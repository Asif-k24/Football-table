import React, { useEffect } from 'react'

export default function ClubDetails() {

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => {
                return console.log("Error fetching data: ", err)
            })
    }, [])

    const footballData = JSON.stringify(data)


    return (
        <div>
            {footballData}
        </div>
    )
}
