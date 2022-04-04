import useSWR from 'swr'
import MultipleCard from '../../../containers/MultipleCard'

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Agent = () => {
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

export default Agent
