import Image from 'next/image';
const Logo = ({ClassNameH=""}) => {
  return (
    <div className="flex font-Tajawal justify-center items-center">
    <div>
      <Image
        src="/img/logo.png"
        alt="صورة الصفحة الرئيسية ندرس"
        width={50}
        height={50}
        
        priority
      />
    </div>
    <h1 className={`font-black  text-xl leading-9 ${ClassNameH}`}>ندرس</h1>
  </div>
  )
}

export default Logo