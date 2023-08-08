import React from 'react'
import Flag from '../components/Flag'

const GeoScreen = () => {
  return (
    <div className='container'>
        <Flag img="./public/flags/pl.svg" title="Польша"/>
        <Flag img="./public/flags/de.svg" title="Германия"/>
        <Flag img="./public/flags/jp.svg" title="Япония"/>
        <Flag img="./public/flags/be.svg" title="Бельгия"/>
        <Flag img="./public/flags/nl.svg" title="Нидерланды"/>
        <Flag img="./public/flags/se.svg" title="Швеция"/>
    </div>
  )
}

export default GeoScreen