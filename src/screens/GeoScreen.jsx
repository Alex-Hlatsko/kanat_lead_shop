import React from 'react'
import Flag from '../components/Flag'

const GeoScreen = () => {
  return (
    <div className='container'>
        <Flag img="./public/flags/🇵🇱.svg" title="Польша"/>
        <Flag img="./public/flags/🇩🇪.svg" title="Германия"/>
        <Flag img="./public/flags/🇯🇵.svg" title="Япония"/>
        <Flag img="./public/flags/🇧🇪.svg" title="Бельгия"/>
        <Flag img="./public/flags/🇳🇱.svg" title="Нидерланды"/>
        <Flag img="./public/flags/🇸🇪.svg" title="Швеция"/>
    </div>
  )
}

export default GeoScreen