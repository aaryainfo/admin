import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function GetcurrentAddress() {

    const [add, setAdd] = useState('')

    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            console.log(latitude, longitude)
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            fetch(url).then(res => res.json()).then(data => {
                setAdd(data.address)
                if (data.address.country == 'Poland') {
                    i18n.changeLanguage('Pl')
                } else if (data.address.country == 'cz') {
                    i18n.changeLanguage('cz')
                } else {
                    i18n.changeLanguage('En')
                }
            })
        })


    }, [])

    console.log(add, "sfsfh")


    return (
        <>
            <p>road : {add.road}</p>
            <p>city : {add.city}</p>
            <p>country :{add.country}</p>
            <p>state:{add.state}</p>
        </>
    )
}

export default GetcurrentAddress