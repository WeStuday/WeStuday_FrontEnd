import React from 'react'
import Link from 'next/link'

const Button = ({textinner,nameLink,ClassNameAdd=""}) => {
  return (
    <Link href={`${nameLink}`}>
        <button className={`${ClassNameAdd} text-white py-3 px-6 hover:shadow-xl transition-all  hover:bg-[#58336c] rounded-full`}>
            {textinner} 
        </button> </Link>
  )
}

export default Button