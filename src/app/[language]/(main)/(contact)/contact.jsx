import { useForm } from 'react-hook-form'
import { useLanguageStore } from '../../../store'
import { contact } from '../../../data'
import { Mail, MapPin } from 'feather-icons-react'
import { useEffect } from 'react'
import useContactStore from '../(contact)/contact-store'
import { FaCheck } from "react-icons/fa6";
// import { handleSubmitForm } from '../(contact)/lib/handle-submit-form'

export function Contact() {
  const { register, handleSubmit, } = useForm()

  const Info = () => {
    const language = useLanguageStore((state) => state.language)
    const currentLang = contact.find((i) => i.language === language)

    return (
      <div className="w-full" >
        <div className="my-2.5 text-[20px] font-bold" >
          <h1 className="text-[18px]" >
            {Object.keys(currentLang)[1]}
          </h1>
        </div>
        < div className="flex flex-row gap-10 flex-wrap">
          <div className="flex flex-row items-center gap-5" >
            <Mail />
            < div className="flex flex-col items-start" >
              <h1 className="font-bold" >
                {Object.keys(currentLang.content)[0]}
              </h1>
              <div>
                {Object.values(currentLang.content)[0]}
              </div>
            </div>
          </div>
          < div className="flex flex-row items-center gap-5" >
            <MapPin />
            < div className="flex flex-col items-start" >
              <h1 className="font-bold" >
                {Object.keys(currentLang.content)[1]}
              </h1>
              <div>
                {Object.values(currentLang.content)[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    (
      function () {
        const el = document.getElementById('container-first-div-first-state')
        const h = el.clientHeight
        const target = document.getElementById('frame-target')

        if (target) {   
          target.style.height = `${h}px`
        }
      }
    )()    
  }, [])

  function handleClick() {
    const run = useContactStore.getState().run
    const runOpacity = useContactStore.getState().runOpacity
    const runValuePercent = useContactStore.getState().runValuePercent
    console.log('data', data)
    run(runValuePercent)
    runOpacity()
    setTimeout(() => {
      runOpacity()
    }, 2500)
  }

  const onSubmit = async data => {
    const response = await handleSubmitForm(data)
    console.log('response', response)
    if (response?.success) {
      handleClick()
    }
  }

  const FirstState = () => {
    return (
      <div
        id='container-first-div-first-state'
        className={`flex flex-col gap-5 w-full opacity-100 transition-opacity duration-1000 absolute top-0 left-0`}>
        <Info />
        {/* <div className="w-full p-5 border-black/30 dark:border-white/30 border rounded-[3px]" >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full"
          >
            <div className="w-full gap-1 flex flex-col" >
              <div>
                <h1>Name</h1>
              </div>
              < input
                className="border border-black/10 placeholder:text-black/80 dark:placeholder:text-neutral-400 dark:border-white/10 h-10 dark:bg-zinc-900 bg-neutral-100 rounded-[3px] p-2 w-full"
                type="text"
                placeholder="Enter your name"
                {...register('name', { required: true })}
              />
            </div>
            < div className="w-full gap-1 flex flex-col" >
              <div>
                <h1>Email</h1>
              </div>
              < input
                className="border border-black/10 placeholder:text-black/80 dark:placeholder:text-neutral-400 dark:border-white/10 h-10 bg-neutral-100 dark:bg-zinc-900 rounded-[3px] p-2 w-full"
                type="email"
                placeholder="Enter your email address"
                {...register('email', { required: true })}
              />
            </div>
            < div className="w-full gap-1 flex flex-col" >
              <div>
                <h1>Subject </h1>
              </div>
              < input
                className="border border-black/10 placeholder:text-black/80 dark:placeholder:text-neutral-400 dark:border-white/10 h-10 bg-neutral-100 dark:bg-zinc-900 rounded-[3px] p-2 w-full"
                type="text"
                placeholder="Enter a subject"
                {...register('subject', { required: true })}
              />
            </div>
            < div className="w-full gap-1 flex flex-col" >
              <div>
                <h1>Message</h1>
              </div>
              < textarea
                {...register('message', { required: true })}
                className="border border-black/10 placeholder:text-black/80 dark:placeholder:text-neutral-400 dark:border-white/10 dark:bg-zinc-900 bg-neutral-100 opacity-100 w-full h-[400px] rounded-[3px] p-2"
                placeholder="Enter your message"
              />
            </div>
            <input
              type='submit'
              value='Send Message'
              className="w-fit px-2 h-14 dark:bg-white placeholder:text-black/80 
              dark:placeholder:text-neutral-400 hover:font-bold bg-black text-white dark:text-black text-center text-[18px] mt-5
               rounded-[3px] hover:scale-105 transition-all dark:hover:bg-white/70 cursor-pointer duration-300"
            />
          </form>
        </div> */}
      </div>
    )
  }


  const SuccessfullyMessage = () => {
    const translateStore = useContactStore(state => state.translate)
    const el = document.getElementById('successfully-message-el')
    const opacity = useContactStore(state => state.opacity)
    const windowWidth = window.innerWidth
    const elRect = el?.getBoundingClientRect()
    const puntoDePartida = elRect?.left
    const elWidthRect = elRect?.width
    const subEl = document.getElementById('successfully-message-sub-el')
    const subElRect = subEl?.getBoundingClientRect()
    const subElWidth = subElRect?.width
    const runValue = Math.abs(puntoDePartida - elWidthRect - windowWidth - subElWidth)
    const runValuePercent = (windowWidth / runValue) * 100
    const setRunValuePercent = useContactStore(state => state.setRunValuePercent)

    useEffect(() => {
      if (runValuePercent) {
        setRunValuePercent(runValuePercent)
      }
    })

    return (
        <div
          style={{
          transform: `translate(${translateStore}%, -${translateStore / 1.5}%)`,
            transition: 'all 0.2s cubic-bezier(0.42, 0, 1, 1)',
            opacity: opacity,
          }}
          id='successfully-message-el'
          className='flex justify-center dark:text-white w-full absolute bottom-0 left-0'
        >
          <div
          id='successfully-message-sub-el'
          className='py-3 px-5 w-fit bg-white border flex flex-row items-center gap-x-3 border-black rounded-[5px] dark:bg-black dark:border-white'
          >
           <div
            className='p-1 rounded-full bg-black dark:bg-white'
           >
            <FaCheck
              className='text-white dark:text-black text-[16px]'
            />
           </div>
          <h1
            className='text-[18px] translate-y-[-1px]'
          >
            Sent successfully!
          </h1>
          </div>
        </div>
    )
  }

  return (
    <>
      <div
        id='frame-target'
        className='relative w-full'
      >
        <FirstState />
        {/* <SuccessfullyMessage /> */}
      </div>
    </>
  )
}
