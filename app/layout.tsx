import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Taniel’s Store",
  description: "Tienda online de moda minimalista para Taniel’s",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
