import React from 'react'
import Flag from '../components/Flag'
import { NavLink, useParams } from 'react-router-dom';

const GeoScreen = () => {
  const { productId } = useParams();

  return (
    <div className='container'>
        <Flag img="../public/flags/pl.svg" flag_key="PL" productId={productId} title="Польша"/>
        <Flag img="../public/flags/de.svg" flag_key="DE" productId={productId} title="Германия"/>
        <Flag img="../public/flags/jp.svg" flag_key="JP" productId={productId} title="Япония"/>
        <Flag img="../public/flags/be.svg" flag_key="BE" productId={productId} title="Бельгия"/>
        <Flag img="../public/flags/nl.svg" flag_key="NL" productId={productId} title="Нидерланды"/>
        <Flag img="../public/flags/se.svg" flag_key="SE" productId={productId} title="Швеция"/>
        <NavLink to="../">
          <div className="back_btn">
            Back
          </div>
        </NavLink>
    </div>
  )
}

export default GeoScreen