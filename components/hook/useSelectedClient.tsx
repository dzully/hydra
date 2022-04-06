import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { listClientProps } from '../../redux/reducer/client'
import { RootState } from '../../redux/store'

const useSelectedClient = () => {
  const router = useRouter()
  const { clientId } = router.query
  const listClient = useSelector((state: RootState) => state.client.listClient)
  const [selectedClient, setSelectedClient] = useState<listClientProps | null>(
    null,
  )

  useEffect(() => {
    if (listClient && !selectedClient) {
      const getSelectedClient = listClient.find(
        (client: listClientProps) => client.id === clientId,
      )
      if (getSelectedClient) setSelectedClient(getSelectedClient)
    }
  }, [clientId, listClient, selectedClient])

  return { selectedClient }
}

export default useSelectedClient
