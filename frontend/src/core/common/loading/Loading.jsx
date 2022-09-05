import React from 'react';
import loadingGif from '../../../assets/image/loading.gif';
import './loading.css'

export default function Loading() {
  return (
    <div className='loading'>
        <img src={loadingGif} alt="loading"/>
    </div>
  )
}
