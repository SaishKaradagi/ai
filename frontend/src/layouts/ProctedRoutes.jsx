import LoaderPage from '@/pages/LoaderPage'
import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProctedRoutes = ({children} ) => {

    const {isLoaded, isSignedIn} = useAuth()

    if(!isLoaded){
        return <LoaderPage/>
    }
    if(!isSignedIn){
        return <Navigate to={'/signin'} replace/>
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default ProctedRoutes
