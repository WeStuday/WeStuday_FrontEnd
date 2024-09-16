import dynamic from 'next/dynamic';
const Hero = dynamic(()=>import('./Components/Hero'))
const Features = dynamic(()=>import('./Components/Features'))
const EducationalSubjects = dynamic(()=>import('./Components/EducationalSubjects/EducationalSubjects'))
const FrequentlyAsked = dynamic(()=>import('./Components/FrequentlyAsked'))
const Benefits = dynamic(()=>import('./Components/Benefits'))

//search optomaization
export const metadata = {
  title: 'ندرس',
  description: 'ندرس لرفع الملفات المدرسية',
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
