'use server'
import { algoliasearch } from "algoliasearch"

const searchClient = algoliasearch('ROT6QMNWYI','5ba07ad37f42364e1c721c2e6ba83178')
const indexName = 'Projects'

export const query = async (query, page, lang = 'es') => {
  return null
  console.log('(QUERY)')
  console.log('LANG ALGOLIA:', lang)
  const x = await searchClient.searchSingleIndex({
    indexName: indexName,
    searchParams: {
      query: query,
      filters: `language:${lang}`,
      hitsPerPage: 10,
      responseFields: ["hits", 'nbHits'],
      page: page,
    },
  })
  console.log('ALGOLIA RESPONSE:', x)
  return x
}