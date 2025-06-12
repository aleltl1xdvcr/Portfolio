import ImgTor from "../../../../utils/img-tor";
import { projects } from "../../../../data";
import { useLanguageStore } from '../../../../store';
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";

export default function MoreProjects() {
  const language = useLanguageStore((state) => state.language)

  console.log('PROYECTS', projects)

  return (
    <div>
      <div
        className="my-3 border-b border-white pb-1"
      >
        <h1
          className="text-[30px]"
        >
          More Projects
        </h1>
      </div>
      {
        projects.find(i => i.language === language)
          .content.map((i, n) => (
            <div
              className="border-b-2 border-black dark:border-white py-5"
              key={`${n}__${language}__${i.title}`}
            >
              <div className="w-full items-start flex flex-col md:flex-row gap-x-5 group">
                <div className="relative w-full md:w-4/12 h-[250px] mb-2 md:h-[200px] md:mb-0">
                  <div className="absolute w-full h-full cursor-zoom-in">
                    <ImgTor
                      key={`${i.img[0]}_${language}`}
                      src={i.img?.[0]}
                      alt="x"
                      containerclassName="w-full relative"
                    />
                  </div>
                </div>
                <div className="w-full md:w-8/12">
                  <div className="w-full">
                    <h1 className="text-[20px] pt-2 font-bold group-hover:underline leading-tight">
                      {i?.title}
                    </h1>
                    <p className="pt-2 leading-tight">{i?.description.slice(0, 150)}</p>
                    <ul
                      className="flex flex-row items-center gap-2 mt-5 text-[15px]"
                    >
                      {
                        i?.stack.map((i, n) => (
                          <li
                            className='bg-zinc-900 px-2 py-1 rounded-[3px]'
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
                      <Link
                        href={`/${language}/projects/${encodeURIComponent(i.title)}`}
                        className="px-2 py-1 border flex flex-row items-center gap-x-2 w-fit transition-transform duration-700 border-white/10 hover:scale-110 bg-white text-black hover:text-black hover:font-bold rounded-full"
                      >
                        <FaEye
                          size={20}
                        />
                        <span>View</span>
                      </Link>

                      <Link
                        href={`/${language}/projects/${encodeURIComponent(i.title)}`}
                        className="px-2 py-1 border flex flex-row items-center gap-x-2 w-fit transition-transform duration-700 border-white hover:scale-110 bg-white text-black hover:text-black hover:font-bold rounded-full"
                      >
                        <FaGithub
                          className=""
                          color="black"
                          size={20}
                        />
                        <span>Source</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
      }
    </div>
  )
}