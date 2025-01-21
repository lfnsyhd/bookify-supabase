import { Link } from 'react-router-dom'
import { FooterLoginCompTypes } from '../types/main'

const FooterLogin = (props: FooterLoginCompTypes) => {
  return (
    <div className='flex gap-2 text-[13px] mt-3'>
      <span className='text-[#b3b3b3]'>{props?.text}</span>
      <Link to={props?.to}>
        <span className='text-white underline font-semibold hover:text-[#1ed760]'>{props?.textBold}</span>
      </Link>
    </div>
  )
}

export default FooterLogin