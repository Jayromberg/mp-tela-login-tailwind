import Image from 'next/image';
import banner from './svg/banner.svg'

export default function Background() {
  return (
    <Image src={banner} alt="Banner" className='hidden'/>
  )
}
