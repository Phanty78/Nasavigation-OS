import '@/styles/globals.css'

export const metadata = {
  title: 'Nasavigation',
  description: 'A collaborative project using APOD API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
