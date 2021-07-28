import React, { useState, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export function Faq({ id, title, text, handleClick, open }) {
  const [hearHeight, setHearHeight] = useState(0)

  const answer = (node => {
    if (node !== null) {
      setHearHeight(node.scrollHeight)
    }
  })

  return (
    <React.Fragment>
      <div
        className="flex w-full bg-black px-3 p-2 duration-300 hover:bg-lightBlack select-none mb-0 m-1 opacity-90"
        onClick={() => handleClick(id)}
        style={
          open.state && open.id === id
            ? { backgroundColor: 'rgba(71, 68, 63, 1)' }
            : {}
        }
      >
        {' '}
        {/* warning! color dependens */}
        <span className="flex items-center justify-center text-xl text-textWhite tracking-wider">
          {title}
        </span>
        <i className="flex items-center justify-center text-textWhite text-3xl mx-2 ml-auto">
          <FontAwesomeIcon
            style={
              open.state && open.id === id ? { transform: 'rotate(90deg)' } : ''
            }
            className="duration-300"
            icon={faCaretRight}
          />
        </i>
      </div>
      <p
        ref={answer}
        className="opacity-90 tracking-widest overflow-hidden text-md text-lightYellow bg-lightBlack duration-300 mb-2 px-3 leading-6"
        style={
          open.state && open.id === id
            ? { maxHeight: hearHeight + 'px' }
            : { maxHeight: 0 + 'px' }
        }
      >
        {text}
      </p>
    </React.Fragment>
  )
}
