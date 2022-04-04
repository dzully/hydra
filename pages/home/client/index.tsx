import useSWR from 'swr'
import MultipleCard from '../../../containers/MultipleCard'
import { fetcher } from '../agent'

const Client = () => {
  const { data } = useSWR('/client.json', fetcher)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MultipleCard tableData={data} />
    </div>
  )
}

export default Client
