import Benefits from './Components/Benefits';
import EducationalSubjects from './Components/EducationalSubjects/EducationalSubjects';
import Features from './Components/Features';
import FrequentlyAsked from './Components/FrequentlyAsked';
import Hero from './Components/Hero';
export const metadata = {
  title: 'موقع ندرس',
  description: 'موقع ندرس لرفع الملفات المدرسية',
  features: [
    'رفع الملف بسهولة وتحويله مباشرةً إلى صفحة ويب يعرض بها بعض المعلومات عن الملف كالاسم، الحجم، بعض الوصف، زر تحميل واضح.',
    'الصفحة الرئيسية يظهر بها جميع الصفوف بصورة منظمة وبداخل كل صف الفصل الدراسي وبداخل كل فصل دراسي جميع المواد.',
    'تضمين الملف بشكل مميز في التدوينة بدون التأثير على سرعة الموقع نهائيًا.',
    'لوحة إدارة يسهل منها رفع الملفات وتعديلها وتعديل وصفها وحذفها أيضًا.',
    'إمكانية جدولة نشر الملفات كعدد معين ينشر يوميًا في أوقات عشوائية بدون الحاجة إلى نشرها دفعة واحدة.',
    'عرض الملفات الشبيهة من نفس الصف والفصل الدراسي والمادة لنفس التدوينة التي يتصفحها الطالب.',
  ]
};
export default function Home() {
  return (
    <div className='font-Tajawal'>
      <Hero/>
      <Features/>
      <EducationalSubjects/>
      <Benefits/>  
      <FrequentlyAsked/>
      </div>
  )
}
