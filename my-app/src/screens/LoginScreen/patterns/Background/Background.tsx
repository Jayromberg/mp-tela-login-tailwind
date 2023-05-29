import Image from 'next/image';
import banner from './svg/banner.svg'

export default function Background() {
  return (
    <Image src={banner} alt="Imagem de fundo da página" className='hidden'/>
  )
}
