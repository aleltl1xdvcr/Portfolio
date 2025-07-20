import { useForm } from 'react-hook-form'
import { useLanguageStore } from '../../store'
import { contact } from '../../data'
import { Mail, MapPin } from 'feather-icons-react'

export function Contact() {
  const { register, handleSubmit, } = useForm()

  function onSubmit(data) {

  }

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

  return (
    <div className="flex flex-col gap-5 w-full" >
      <Info />
      < div className="w-full p-5 border-white/30 border rounded-[3px]" >
        <form
          type='submit'
          className="flex flex-col gap-5 w-full"
        >
          <div className="w-full gap-1 flex flex-col" >
            <div>
              <h1>Name </h1>
            </div>
            < input
              className="border border-white/10 h-10 bg-zinc-800/60 rounded-[3px] p-2 w-full"
              type="text"
              placeholder="Your name"
              {...register('name', { required: true })}
            />
          </div>
          < div className="w-full gap-1 flex flex-col" >
            <div>
              <h1>Your mail direction </h1>
            </div>
            < input
              className="border border-white/10 h-10 bg-zinc-900 rounded-[3px] p-2 w-full"
              type="text"
              placeholder="Your email..."
              {...register('email', { required: true })}
            />
          </div>
          < div className="w-full gap-1 flex flex-col" >
            <div>
              <h1>Your Message </h1>
            </div>
            < textarea
              {...register('message', { required: true })}
              className="border border-white/10 bg-zinc-900 text-white opacity-100 w-full h-[400px] rounded-[3px] p-2"
              placeholder="Your message"
            />
          </div>
          < input
            type="submit"
            value="Send Message"
            className="w-fit px-2 h-14 bg-white text-black text-center text-[18px] rounded-[3px] hover:bg-white/70 cursor-pointer transition-colors duration-300 ease-in"
          />
        </form>
      </div>
    </div>
  )
}
