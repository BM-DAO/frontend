import React from 'react'
import Login from './login'
import { Metadata } from 'next'

const Page = () => {
  return (
    <Login />
  )
}
export const metadata: Metadata =  {
  title: "BM DAO | Login"
}

export default Page