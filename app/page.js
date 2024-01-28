"use client" 

import React from 'react'
import Background from '@/Components/Background'
import Foreground from '@/Components/Foreground'

const page = () => {
  return (
    <>
    <div className=' h-screen w-full relative bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div>
    
    </>
  )
}

export default page
