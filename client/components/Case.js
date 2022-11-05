import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Case({ icon, title, text }) {
  return (
    <>
      <div className="case m-4 p-2">
        <i className='flex items-center justify-center text-textWhite text-7xl'><FontAwesomeIcon icon={icon} /></i>
        <p className='text-center mt-4  text-2xl text-gold tracking-wider'>{title}</p>
        <p className='text-center mt-4 tracking-widest'>{text}</p>
      </div>
    </>
  )
}
