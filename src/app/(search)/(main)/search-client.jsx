'use client'
import { useRefinementList, useSearchBox } from "react-instantsearch"
import { useEffect, useRef, useState } from "react";
import Results from "../(results)/results";
import { Search, Settings, X } from "react-feather";
import { Filter, Minus, MoreHorizontal, Plus } from "feather-icons-react";
import { useLanguageStore } from "../../store";
import useQueryStoreRl from "../(search-store)/search-store-rl"
import './main.css'

export default function SearchClient({ RESULTS }) {
  const addItemsRl = useQueryStoreRl((state) => state.addItemsRl)
  const operator = useQueryStoreRl((state) => state.operator)
  const setOperator = useQueryStoreRl((state) => state.setOperator)
  const name = useQueryStoreRl((state) => state.name)
  const setName = useQueryStoreRl((state) => state.setName)
  const count = useQueryStoreRl((state) => state.count)
  const setCount = useQueryStoreRl((state) => state.setCount)
  const isRefined = useQueryStoreRl((state) => state.isRefined)
  const setIsRefined = useQueryStoreRl((state) => state.setIsRefined)
  const persisted_items = useQueryStoreRl((state) => state.ITEMSRL)
  const language = useLanguageStore((state) => state.language)
  const { refine } = useSearchBox()
  const [inputValue, setInputValue] = useState('')
  const [modal, setModal] = useState(false)

  const inputRefN = useRef(null)

  function setQuery(newQuery) {
    setInputValue(newQuery)
  }

  function delete_query_state() {
    setQuery('')
  }

  const {
    items,
    refine: refineRefinementList,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList({
    attribute: 'stack', 
    limit: 5,
    showMoreLimit: 20,
    showMore: true,
    operator: operator?.toLowerCase(),
    sortBy: [`count:${count}`, `name:${name}`, `isRefined:${isRefined}`],
    
  });

  useEffect(() => {
    if (items.length !== 0 && useQueryStoreRl.persist.hasHydrated()) {
      addItemsRl(items)
    }
  }, [items])

  function setQuery(newQuery) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  const dinamic_placeholders = [
    { lang: 'es', placeholder: 'Buscar proyectos...'},
    { lang: 'en', placeholder: 'Search projects...'},
    { lang: 'de', placeholder: 'Projekte suchen...'},
    { lang: 'pt', placeholder: 'Buscar projetos...'},
    { lang: 'ru', placeholder: 'Искать проекты...'},
    { lang: 'ko', placeholder: '프로젝트 검색...'},
    { lang: 'ja', placeholder: '	プロジェクトを検索...'},
    { lang: 'fr', placeholder: 'Rechercher des projets...'},
  ]

  function translatePlaceholder() {
    return Object.values(dinamic_placeholders.filter(i => i.lang === language)[0] || [])[1]
  }

  return (
    <div
      className="w-full"
    >
      <div
        id="sb_top"
        className="w-full"
      >
        <div
          id=""
          className="mt-3 w-full flex flex-col gap-5"
        >
          <div
            className="flex flex-row items-center justify-between
            h-[45px] w-full"
          >
            <form
              className="dark:border dark:border-white h-full flex flex-row focus-within:border-y-[2.5px] focus-within:border-l-[2.5px] border-r-0 transition-all duration-100
            w-full border border-black"
              action=""
              role="search"
              noValidate
              onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (inputRefN.current) {
                  inputRefN.current.blur()
                }
              }}
            >
              <div
                className="
                 peer-[.is-dirty]:peer-focus:border-l-[2.5px] peer-[.is-dirty]:peer-focus:hidden border-l-black transition-all duration-100  
                text-[25px]  h-full items-center flex text-center px-3 w-[50px] "
              >
                {
                  inputValue?.length === 0
                    ? <span>
                      <Search />
                    </span>
                    : null
                }
                {
                  inputValue?.length !== 0
                    ? <span
                      onClick={() => delete_query_state()}
                    >

                      <X
                        className="hover:text-red-800 transition-colors duration-1000"
                      />
                    </span>
                    : null
                }
              </div>
              <input
                id="search-box"
                className="is-dirty peer placeholder:text-zinc-600 dark:bg-inherit dark:text-white dark:placeholder:text-white
                placeholder:text-[18px]  
                outline-none w-full h-full text-[20px] px-1.5 
                font-bold placeholder:font-light"
                type="text"
                ref={inputRefN}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                placeholder={translatePlaceholder()}
                spellCheck={false}
                maxLength={512}
                value={inputValue}
                onChange={((e) => {
                  setQuery(e.currentTarget.value)
                })}
                autoFocus
              />

            </form>
          </div>

          <div>
            <Stack
              refine={refineRefinementList}
              items={persisted_items}
              isShowingMore={isShowingMore}
              toggleShowMore={toggleShowMore}
              canToggleShowMore={canToggleShowMore}
              setShowModal={setModal}
              modalState={modal}
              operator={operator}
              setOperator={setOperator}
              count={count}
              setCount={setCount}
              name={name}
              setName={setName}
              isRefined={isRefined}
              setIsRefined={setIsRefined}
            />
          </div>
        </div>
      </div>

      <div>
        <Results
          RESULTS_SSR={RESULTS}
        />
      </div>

    </div>
  )
}

function Stack({ items, refine, isShowingMore, toggleShowMore, canToggleShowMore, setShowModal, modalState, operator, setOperator,
  name, setName, count, setCount, isRefined, setIsRefined
 }) {
  function handleModal() {
    setShowModal(!modalState)
  }

  function resetFn() {
    setOperator('OR')
    setName('ASC')
    setCount('ASC')
    setIsRefined('ASC')
  }

  return (
    <div
      className="flex flex-row items-center gap-3 flex-wrap"
    >
      {
        items?.map((i, n) => (
          <div
            onClick={() => refine(i.value)}
            key={`${n}_${i}`}
            className={`border border-white/50 p-2.5 hover:bg-white hover:text-black cursor-pointer transition-colors duration-100 ease-in 
              rounded-full text-[15px] hover:font-bold ${i.isRefined ? 'bg-white text-black font-bold' : null}`}
          >
            <label
              className="flex flex-row items-center"
            >
              <span>{i.label}</span>
              <span className="pl-1 text-[11px]">({i.count})</span>
            </label>
          </div>
        ))
      }
      <div
        className="flex flex-row items-center gap-x-5 justify-between"
      >
        <button onClick={toggleShowMore} disabled={!canToggleShowMore}>
          {isShowingMore ? <Minus /> : <Plus />}
        </button>

        <div
          className="relative"
        >        

         <div
            onClick={() => handleModal()}
         >
            <MoreHorizontal />
         </div>
          <div
            className=
            {`${
              modalState 
            ? 
                'opacity-100 pointer-events-auto'
            : 
            
          'opacity-0 pointer-events-none'} 
          duration-200 transition-opacity ease-out border border-white-70 absolute t w-fit p-5 whitespace-nowrap bg-black z-20`}
          >
            <div
              className="w-full"
            >
              <div
                className="flex flex-row items-center w-full justify-between"
              >
                <div
                  className="flex flex-row items-center gap-x-3"
                >
                  <Settings size={18} />
                  <h1
                    className="font-bold"
                  >Filter Stack Setting</h1>
                </div>
                <div
                  className="hover:scale-110 transition-transform duration-200 ease-in"
                  onClick={() => handleModal()}
                >
                  <X />
                </div>
              </div>
              <div
                className="flex flex-col items-start gap-y-3 mt-3"
              >
                <h1>Operator</h1>

                <div className="relative max-w-sm flex w-full flex-col rounded-xl shadow">
                  <nav className="flex min-w-[240px] flex-col gap-0.5">

                    <label htmlFor="or" className="flex items-center gap-3 cursor-pointer pr-2 pl-1 py-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="or"
                        name="operator"
                        value="OR"
                        checked={operator === 'OR'}
                        onChange={(e) => setOperator(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-white-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 group-hover:bg-black bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${operator === 'OR' ? 'scale-100' : null} ¿peer-checked:scale-100 transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${operator === 'OR' ? 'font-bold' : null}`}>OR</span>
                    </label>

                    <label htmlFor="and" className="flex items-center gap-3 cursor-pointer py-2 pl-1 pr-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="and"
                        name="operator"
                        value="AND"
                        checked={operator === 'AND'}
                        onChange={(e) => setOperator(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 bg-white group-hover:bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${operator === 'AND' ? 'scale-100' : null} peer-checked:scale-100¿ transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${operator === 'AND' ? 'font-bold' : null}`}>AND</span>
                    </label>
                  </nav>
                </div>
                
              </div>

              <div
                className="flex flex-row items-center gap-x-3 my-3"
              >
                <Filter size={18} />
                <h1
                  className="font-bold"
                >Sorting</h1>
              </div>

              <div
                className="flex flex-col items-start gap-y-3 mt-3"
              >
                <h1>Name</h1>

                <div className="relative max-w-sm flex w-full flex-col rounded-xl shadow">
                  <nav className="flex min-w-[240px] flex-col gap-0.5">

                    <label htmlFor="name_asc" className="flex items-center gap-3 cursor-pointer pr-2 pl-1 py-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="name_asc"
                        name="operator"
                        value="ASC"
                        checked={name === 'ASC'}
                        onChange={(e) => setName(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-white-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 group-hover:bg-black bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${name === 'ASC' ? 'scale-100' : null} ¿peer-checked:scale-100 transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${name === 'OR' ? 'font-bold' : null}`}>ASC</span>
                    </label>

                    <label htmlFor="name_desc" className="flex items-center gap-3 cursor-pointer py-2 pl-1 pr-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="name_desc"
                        name="operator"
                        value="DESC"
                        checked={name === 'DESC'}
                        onChange={(e) => setName(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 bg-white group-hover:bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${name === 'DESC' ? 'scale-100' : null} peer-checked:scale-100¿ transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${name === 'AND' ? 'font-bold' : null}`}>DESC</span>
                    </label>
                  </nav>
                </div>

              </div>

              <div
                className="flex flex-col items-start gap-y-3 mt-3"
              >
                <h1>Count</h1>

                <div className="relative max-w-sm flex w-full flex-col rounded-xl shadow">
                  <nav className="flex min-w-[240px] flex-col gap-0.5">

                    <label htmlFor="count_asc" className="flex items-center gap-3 cursor-pointer pr-2 pl-1 py-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="count_asc"
                        name="operator"
                        value="ASC"
                        checked={count === 'ASC'}
                        onChange={(e) => setCount(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-white-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 group-hover:bg-black bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${count === 'ASC' ? 'scale-100' : null} ¿peer-checked:scale-100 transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${count === 'ASC' ? 'font-bold' : null}`}>ASC</span>
                    </label>

                    <label htmlFor="count_desc" className="flex items-center gap-3 cursor-pointer py-2 pl-1 pr-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="count_desc"
                        name="operator"
                        value="DESC"
                        checked={count === 'DESC'}
                        onChange={(e) => setCount(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 bg-white group-hover:bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${count === 'DESC' ? 'scale-100' : null} peer-checked:scale-100¿ transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${count === 'DESC' ? 'font-bold' : null}`}>DESC</span>
                    </label>
                  </nav>
                </div>

              </div>

              <div
                className="flex flex-col items-start gap-y-3 mt-3"
              >
                <h1>Is refined</h1>

                <div className="relative max-w-sm flex w-full flex-col rounded-xl shadow">
                  <nav className="flex min-w-[240px] flex-col gap-0.5">

                    <label htmlFor="isRefined_asc" className="flex items-center gap-3 cursor-pointer pr-2 pl-1 py-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="isRefined_asc"
                        name="operator"
                        value="ASC"
                        checked={isRefined === 'ASC'}
                        onChange={(e) => setIsRefined(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-white-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 group-hover:bg-black bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${isRefined === 'ASC' ? 'scale-100' : null} ¿peer-checked:scale-100 transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${isRefined === 'ASC' ? 'font-bold' : null}`}>ASC</span>
                    </label>

                    <label htmlFor="isRefined_desc" className="flex items-center gap-3 cursor-pointer py-2 pl-1 pr-2 hover:bg-gray-100 rounded-lg w-full group">
                      <input
                        type="radio"
                        id="isRefined_desc"
                        name="operator"
                        value="DESC"
                        checked={isRefined === 'AND'}
                        onChange={(e) => setIsRefined(e.target.value)}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 rounded-full border border-gray-400 group-hover:border-black relative">
                        <div className={`w-3 h-3 bg-white group-hover:bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 ${isRefined === 'DESC' ? 'scale-100' : null} peer-checked:scale-100¿ transition-transform duration-200`} />
                      </div>
                      <span className={`text-sm group-hover:text-black ${isRefined === 'DESC' ? 'font-bold' : null}`}>DESC</span>
                    </label>
                  </nav>
                </div>

              </div>
            </div>

            <div
              className="flex flex-row items-center gap-x-5 mt-3 text-[15px]"
            >
              <button
                className="border border-white/80 rounded-[7px] py-2 px-3 hover:bg-white hover:text-black"
              >
                Apply Filters
              </button>
              <button
                onClick={() => resetFn()}
                className="border hover:border-red-700/80 rounded-[7px] py-2 px-3 hover:bg-red-700 hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}