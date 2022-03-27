import Link from 'next/link'
import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <>
      <h1>Login</h1>
      <h2>
        <Link href="/Register">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default Login
