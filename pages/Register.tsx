import Link from 'next/link'
import type { NextPage } from 'next'
// import RegistrationForm from '../components/Form/RegisterForm'

const Register: NextPage = () => {
  return (
    <>
      <h1>Register</h1>
      {/* <RegistrationForm /> */}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default Register
