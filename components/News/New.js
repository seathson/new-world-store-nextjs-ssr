import React, { useState } from 'react'
import Image from 'next/image'
import preview from '../../assets/img/preview.png'
import Link from 'next/link'
import Router from 'next/router'

export function New({ id, imagePath, name, title, description }) {
  const [scale, setScale] = useState(false)

  const handleClick = (e) => {
    Router.push(`/news/${name}`)
  }

  const handleEvent = (e) => {
    setScale(prevScale => !prevScale)
  }

  return (
    <div className="new my-6 mx-4 cursor-pointer hover:outline-white hover:bg-lightYellow hover:bg-opacity-5" onClick={handleClick} onMouseOver={handleEvent} onMouseOut={handleEvent}>
      <div
        className="flex flex-col flex-wrap pb-0 overflow-hidden"
        style={{ maxWidth: '350px', minWidth: '250px' }}
      >
        <div
          className={scale ? "flex w-full h-48 bg-cover duration-200 border-b-2 transform scale-105" : "flex w-full h-48 bg-cover duration-200 border-b-2"}
          style={{ backgroundImage: `url(${imagePath})` }}
        ></div>
        <div className="flex flex-col w-full p-2">
          <p className="font-Fell tracking-wide text-2xl my-2">{title}</p>
          <p className="tracking-widest text-sm font-medium opacity-80">{description}</p>
        </div>
      </div>
    </div>
  )
}
