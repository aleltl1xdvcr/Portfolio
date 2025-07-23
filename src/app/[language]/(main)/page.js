'use server'

import  { getResults } from '../../(search)/(lib-search)/get-results'
import Home from './Home'

export async function generateStaticParams() {
  return [
    { language: 'es' },
    { language: 'en' },
    { language: 'fr' },
    { language: 'pt' },
    { language: 'ru' },
    { language: 'ko' },
    { language: 'de' },
    { language: 'ja' },
  ];
}

export default async function SearchPage() {
  const data = await getResults('ssr')

  return (
    <div className='w-full justify-center items-center flex'>
        <Home
          data={data}
        />
    </div>
  )
}
