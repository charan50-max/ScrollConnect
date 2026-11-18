import Image from 'next/image'
import React from 'react'
import Nav from './components/Nav'
function page() {
  return (
    <div className="p-3  ">
      
      <Nav/>
        <div className="p-3   flex w-full h-screen md:flex-row flex-col">
            <div className="p-3   w-1/2 h-screen item-center justify-center" ><h1 className="text-2xl font-bold">Welcome to SIGCE</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur assumenda maiores possimus dicta eligendi. At minima, aliquid tempore eligendi labore laboriosam dignissimos cumque neque? Quaerat aperiam perspiciatis odio cum natus!</p>
            <button className="p-4 bg-black text-white rounded-lg w-fit">join with us</button></div>
            <div className="p-3  w-1/2 h-screen item-center justify-center"><Image src="/login.png" alt="description" w-fit="true" width={500} height={300} ></Image></div>
        </div>
    </div>
  )
}

export default page