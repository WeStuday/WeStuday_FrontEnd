import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('./Components/Footer'))
const Header = dynamic(() => import('./Components/Header/Header'))
import './styles/globals.css'

export const metadata = {
  title: 'ندرس',
  description: 'ندرس لرفع الملفات  المدرسية'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
