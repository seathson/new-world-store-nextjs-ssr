import React from 'react'
import { New } from './New'

export function NewsR({ news }) {
  return (
    <div className="news flex flex-wrap justify-around">
      {news.map((item) => (
        <New
          key={item._id}
          id={item._id}
          imagePath={item.imagePath}
          name={item.name}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}
