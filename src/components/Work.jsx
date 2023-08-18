import {React} from 'react'
import {Image} from "cloudinary-react";

function Work({cloudname, thumbnail, title, link}) {
  return (
    <div className='work'>
      <a href={link} className="imagess">
        <Image cloudName={cloudname} publicId={thumbnail} alt={title} className="images"/>
      </a>
      <div className='picTitle'>
        <div className='sect'></div>
        <p className="title text-center text-xl text-azure">{title}</p>
      </div>
    </div>
  )
}

export default Work