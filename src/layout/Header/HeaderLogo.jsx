import Image from 'next/image'

export default function HeaderLogo() {
  return (
    <div className="flex gap-4 items-center">
      <Image src="/images/nasa-logo.png" width={80} height={80} priority />
      <h1 className="font-nasa text-5xl font-bold">NASAVIGATION</h1>
    </div>
  )
}
