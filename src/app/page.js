import React from 'react'
import { configParser } from './lib/configParser'


const Page = () => {
  return (
    <>
      <div className='container main-box grid grid-cols-4 gap-4 box-opacity'>
        {configParser()}
      </div>
    </>
  )
}

export default Page