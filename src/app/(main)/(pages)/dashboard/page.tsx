import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 relative '>
    <h1 className='text-3xl sticky top-0 z-[10] p-5 bg-background/50 backdrop-blur-lg flex items-center border-b'>Dashboard</h1>
    </div>
  )
}

export default page