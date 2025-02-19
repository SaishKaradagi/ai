import { Loader } from 'lucide-react'
import React from 'react'

const LoaderPage = () => {
  return (
    <div>
      loading....
      <Loader className='w-6 h-6 min-w-6 min-h-6 animate-spin'/>
    </div>
  )
}

export default LoaderPage
