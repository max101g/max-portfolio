import React from 'react'
import PDF from '../../assets/PDF.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={PDF} download className='btn'>Download CV</a>
        <a href='#contacts' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA