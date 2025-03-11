import HeaderLogo from '@/layout/Header/HeaderLogo'
import NavBar from '@/layout/Header/NavBar'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <HeaderLogo />
      <NavBar />
    </header>
  )
}
