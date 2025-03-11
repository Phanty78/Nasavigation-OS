import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'

export const metadata = {
  title: 'Nasavigation',
  description: 'A collaborative project using APOD API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
