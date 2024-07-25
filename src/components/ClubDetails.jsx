import React, { useEffect } from 'react'

export default function ClubDetails() {

    useEffect(() => {
        fetch("/data.json")
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch(error => {
                return console.log("Error fetching data: ", error)
            })
    }, [])

    const footballData = JSON.stringify(data)


    return (
        <div>
            {footballData}
        </div>
    )
}
