import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/layout/Footer/Footer'
import Header from '@/layout/Header/Header'
import '@/styles/globals.css'

import localFont from 'next/font/local'

const nasafont = localFont({ src: '../../public/fonts/Nasa.ttf' })

export const metadata = {
  title: 'Nasavigation',
  description: 'A collaborative project using APOD API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={nasafont.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
