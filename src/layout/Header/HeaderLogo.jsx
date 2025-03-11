import { nasafont } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderLogo() {
  return (
    <>
      <Link href={'/'} className="flex gap-4 items-center">
        <Image src="/images/nasa-logo.png" width={80} height={80} priority />
        <h1 className={`${nasafont.className} text-5xl font-bold`}>
          NASAVIGATION
        </h1>
      </Link>
    </>
  )
}
