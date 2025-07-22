'use client'

import { InstantSearch } from 'react-instantsearch'
import { algoliasearch } from "algoliasearch"
import SearchClient from "../../(search)/(main)/search-client"

const searchClient = algoliasearch('ROT6QMNWYI', '5ba07ad37f42364e1c721c2e6ba83178')
const indexName = 'Projects'

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
