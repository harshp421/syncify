import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_component/ConnectionCard'

type Props = {}

const Connections = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 relative '>
      <h1 className='text-3xl sticky top-0 z-[10] p-5 bg-background/50 backdrop-blur-lg flex items-center border-b'>Connections</h1>

      <div className='flex flex-col gap-4 relative '>
        <section className='flec flex-col gap-4 p-6 text-muted-foreground'>
          Connect All Yous Apps directly from here ,you may need to connct thers apps regularly to refresh varification or to get data from them.

          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
            // connected={connections}
            />
          ))}
        </section>
      </div>

    </div>
  )
}

export default Connections