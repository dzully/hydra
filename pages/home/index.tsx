import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/home') {
      router.push('/home/overview')
    }
  }, [router])

  return <div />
}

export default Home
