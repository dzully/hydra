import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useSWR from 'swr'
import { fetcher } from '../pages/home/agent'
import { handleAllUser } from '../redux/reducer/client'
import { RootState } from '../redux/store'

const useClient = () => {
  const listClient = useSelector((state: RootState) => state.client.listClient)
  const dispatch = useDispatch()
  const { data } = useSWR(!listClient ? '/client.json' : null, fetcher)

  useEffect(() => {
    if (data && !listClient) {
      dispatch(handleAllUser(data))
    }
  }, [listClient, data, dispatch])

  return { listClient }
}

export default useClient
