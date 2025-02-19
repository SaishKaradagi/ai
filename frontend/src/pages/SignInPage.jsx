import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div>
      <SignIn path='/signin'/>
    </div>
  )
}

export default SignInPage
