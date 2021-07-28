import React, { useState } from 'react'
import Image from 'next/image'

export function New({ id, title, text }) {
  return (
    <div className="new flex flex-1 flex-col flex-wrap border-2" style={{minWidth: '350px'}}>
      <div className='flex'>
        image
      </div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  )
}
