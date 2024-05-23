import React from 'react'
import Workflow from './Workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
        <section className='flex flex-com gap-4 p-6 '>
            <Workflow name='automation workflow' description='text workflow'  id='6564646464644' publish={false}/>
        </section>
    </div>
  )
}

export default Workflows