import  Footer from './Components/Footer';
import  Header from './Components/Header';
import './styles/globals.css'

export const metadata = {
  title: 'موقع ندرس',
  description: 'موقع ندرس لرفع الملفات  المدرسية'
}
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body >
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
