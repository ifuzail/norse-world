import React from 'react'

const page = () => {
  return (
    <section className='flex md:flex-row flex-col justify-center items-center'>
        <div className='md:w-3/4 w-full'>
         Selected realms info
        </div>
        <aside className='md:w-1/4 w-full'>
          Realms list
        </aside>
    </section>
  )
}

export default page