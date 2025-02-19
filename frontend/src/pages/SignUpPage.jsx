import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUpPage = () => {
  return (
    <div>
      <SignUp path='/signup'/>
    </div>
  )
}

export default SignUpPage
