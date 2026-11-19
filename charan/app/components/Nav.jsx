import React from 'react'
import Link from 'next/link'
function Nav() {
  return (
    <div className='w-full flex gap-5 items-start'>
      <div>
        logo
      </div>
      <div className='flex gap-5 md:flex hidden'>
        
        <Link href="/about">About</Link>
        <h2>FaQ</h2>
      </div>
      <div>
        <button>login</button>
        </div>
    </div>
  )
}

export default Nav