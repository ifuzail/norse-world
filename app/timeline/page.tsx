import { TimelineCard } from '@/components/cards/TimelineCard'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='font-bold text-6xl text-center mt-10 text-gray-300'>Timeline</h1>
     
        <div className='p-4 w-screen h-full overflow-x-scroll'>
         <TimelineCard />
        </div>
    </div>
  )
}

export default page