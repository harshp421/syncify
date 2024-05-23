import React from 'react'
import WorkflowButton from './_component/WorkflowButton'
import Workflows from './_component'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col gap-6 relative  justify-between'>
      <h1 className='text-3xl sticky top-0 z-[10] p-5 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b '>WorkFlows  <WorkflowButton/></h1>
       <Workflows/>
    </div>
  )
}

export default page