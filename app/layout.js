import { Header,Footer } from './Components';
import './styles/globals.css'

export const metadata = {
  title: 'موقع ندرس',
  description: 'موقع ندرس لرفع الملفات  المدرسية'
}
const styles = {
  fontFamily: "'Tajawal', sans-serif !important",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
      <link  rel="stylesheet" href="https://fonts.googleapis.com"  />
      <link  rel="stylesheet" href="https://fonts.gstatic.com"  />
      <link  href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;500;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={styles}>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
