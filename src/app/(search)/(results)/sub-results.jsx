import { useEffect } from "react"
import useQueryStore from "../(search-store)/search-store"
import { useShallow } from 'zustand/react/shallow'
import ImgTor from "../../utils/img-tor"
import { useLanguageStore } from "../../store"
import { Configure, useInfiniteHits } from "react-instantsearch"
import Link from 'next/link'
import '@splidejs/react-splide/css/core'
import { FaGithub, FaEye } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

export default function SubResults() {
  const cinema = useLanguageStore((state) => state.cinema)
  const setCinema = useLanguageStore((state) => state.setCinema)
  const language = useLanguageStore((state) => state.language)
  const addResultsStore = useQueryStore(useShallow((state) => state.addResultsStore))
  const persisted_results = useQueryStore((state) => state.RESULTS)

  function fnCinema(id) {
    setCinema(id)
  }

  const {
    items,
  } = useInfiniteHits()

  useEffect(() => {
    if (items.length !== 0 && useQueryStore.persist.hasHydrated()) {
      addResultsStore(items)
    }
  }, [items])

  const language_filter = `language:${language}`

  return (
    <div
      id="observer_root"
      className="flex flex-col"
    >
      <Configure
        analytics={false}
        filters={language_filter}
        hitsPerPage={40}
      />
      <>
        {persisted_results?.hits.filter(i => i.language === language)?.map((i, index) => (
          <div
            id={`target_observer_node_${items?.length - 1 === index ? 'last' : `_${index + 1}_${i?.id}`
              }`}
            className="border-b border-black/60 dark:border-white py-5"
            key={index}
          >
            <div className="w-full items-start flex flex-col md:flex-row gap-x-5 group">
              <div className="relative w-full md:w-4/12 h-[250px] mb-2 md:h-[200px] md:mb-0">
                <div className="absolute w-full h-full cursor-zoom-in">
                  <ImgTor
                    key={`${i.img?.[index]}_${language}`}
                    src={i.img?.[0]}
                    alt={i.title}
                    containerclassName="w-full relative"
                    fnCinema={fnCinema}
                    cinemaID={i.title}
                  />
                </div>
              </div>
              <div className="w-full md:w-8/12">
                <div className="w-full">
                  <h1 className="text-[20px] pt-2 font-bold group-hover:underline leading-tight">
                    {i?.title}
                  </h1>
                  <p className="pt-2 leading-tight">{i?.description?.slice(0, 150)}</p>
                  <ul
                    className="flex flex-row items-center gap-3 mt-5 text-[15 px] flex-wrap"
                  >
                    {
                      i?.stack?.map((i, n) => (
                        <li
                          className='bg-zinc-900 text-white px-2 py-1 rounded-[3px]'
                        key={n}
                        >
                          {i}
                        </li>
                      ))
                    }
                  </ul>
                  <div
                    className="mt-5 flex flex-row items-center gap-x-3 text-[13px]"
                  >
                    <a
                      target="_blank" rel="noopener noreferrer"
                      href={i.website}
                      className="px-2 py-1 border flex flex-row items-center gap-x-2 w-fit transition-transform duration-700 border-white/10 hover:scale-110 bg-black dark:bg-white dark:text-black text-white hover:font-bold rounded-full"
                    >
                      <FaEye
                        size={20}
                      />
                      <span>View</span>
                    </a>

                    <a target="_blank" rel="noopener noreferrer"
                      href={i.source}
                      className="px-2 py-1 border flex flex-row items-center gap-x-2 w-fit transition-transform duration-700 border-white hover:scale-110 bg-black dark:bg-white text-white dark:text-black hover:font-bold rounded-full"
                    >
                      <FaGithub
                        size={20}
                      />
                      <span>Source</span>
                    </a>

                    <Link
                      href={`/${language}/projects/${i.url}`}
                      className="hidden px-2 py-1 border flex flex-row items-center gap-x-2 w-fit transition-transform duration-700 border-white hover:scale-110 bg-white text-black hover:text-black hover:font-bold rounded-full"
                    >
                      <CgDetailsMore
                        className=""
                        color="black"
                        size={20}
                      />
                      <span>More Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>

    </div>

  )
}