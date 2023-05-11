import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <Image src={logo} alt="" width={130} height={50} />
    </header>
  )
}
