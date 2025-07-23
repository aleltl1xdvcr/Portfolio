'use client'

import { InstantSearch } from 'react-instantsearch'
import { algoliasearch } from "algoliasearch"
import SearchClient from "../../(search)/(main)/search-client"

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY

const searchClient = algoliasearch(appId, apiKey)
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME

export default function Projects({ data }) {
  return (
    <div className="w-full flex flex-col items-center justify-center my-10">
      <div className="w-full">
        <div className="w-full flex flex-col">
          <InstantSearch
            indexName={indexName}
            stalledSearchDelay={500}
            searchClient={searchClient}
            future={{
              preserveSharedStateOnUnmount: true,
              persistHierarchicalRootCount: true,
            }}
            initialUiState={{
              Projects: {
                query: '',
              },
            }}
          >
            <div
              className="flex flex-row items-center w-full"
            >
              <SearchClient />
            </div>
          </InstantSearch>
        </div>
      </div>
    </div>
  )
}
