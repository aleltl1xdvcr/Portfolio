'use client'

import { useState, } from "react"
import SubResults from "./sub-results"
import useQueryStore from "../(search-store)/search-store"
import useStore from "../../useStore"

export default function Results() {
  const RESULTS_SSR = []
  const [flag_mounted_box, set_flag_mounted_box] = useState(false)
  const persisted_results = useStore(useQueryStore, (state) => state.RESULTS)
  const x = window.location.search
  const urlParams = new URLSearchParams(x);
  const slug_result = urlParams.get('query')

  return (
    <div
      className="w-full"
    >
      {
        !slug_result || slug_result?.length === 0
          ? null
          : <div
            className="mb-4"
          >
            {
              persisted_results?.length === 0
                ?
                <h1>
                  No se encontraron resultados de <span className="font-bold">"{slug_result}"</span>
                </h1>
                :
                <h1>
                  Resultados de <span className="font-bold">"{slug_result}"</span>
                </h1>
            }
          </div>
      }
      <div>
        <SubResults
          RESULTS={RESULTS_SSR}
       
        />
      </div>

      {
        (persisted_results
          && persisted_results?.hits?.length < persisted_results?.nbHits
          || persisted_results?.hits?.length !== persisted_results?.nbHits)
          && flag_mounted_box === true
          ?
          <div
            id="more_results_box"
            className="w-full flex justify-center items-center mt-5"
          >
            <div
              className='w-fit'
            >
              <button
                onClick={(e) => showMoreResults(e)}
                id='button-update-results'
                className='px-6 py-[20px] bg-black text-white hover:bg-stone-700 transition-colors dark:border-white dark:border-2 duration-1000'
              >
                Más historias
              </button>
            </div>
          </div>
          : null
      }
    </div>
  )
}















































































