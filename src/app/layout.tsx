import './globals.css'
import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import Header from '../components/Header'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Ignite Shop',
  description: 'Created by Matheus F',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="ml-32 mt-10 flex flex-col gap-8 bg-gray1 text-gray4">
        <Header />
        {children}
      </body>
    </html>
  )
}
