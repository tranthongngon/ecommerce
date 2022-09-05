import React from 'react'
import './title-section.css'

export default function TitleSection({textTitle}) {
  return (
    <div className='title-section'>
        <h2 className='title-text'>
            {textTitle}
        </h2>
    </div>
  )
}
