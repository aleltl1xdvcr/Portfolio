'use server'

import  { getResults } from '../../(search)/(lib-search)/get-results'
import Home from './Home'

export default async function SearchPage({ params }) {
  const data = await getResults('ssr')
  return (
    <div className='w-full justify-center items-center flex'>
        <Home
          data={data}
        />
    </div>
  )
}
