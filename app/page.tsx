import NewChat from "@/components/NewChat"
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"

const Home = () => {
  return (
    <>
      <div className=" md:hidden lg:hidden xl:hidden py-2 w-[200px] h-[100px]">
        <NewChat />
      </div>
      <main className="flex flex-col items-center justify-center px-2 h-screen text-white">
        <h3 className='text-5xl font-bold mb-20'>My GPT</h3>
        <div className="flex space-x-2 text-center ">
          <div className="">
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className='h-6 w-6 md:h-8 md:w-8' />
              <h2 >Examples</h2>
            </div>
            <div className="space-y-2">
              <p className='infoText'>"Explain Something to me with good humour" </p>
              <p className='infoText'>"What is the difference between a dog and a cat?"</p>
              <p className='infoText'>"What is love?"</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className='h-6 w-6 md:h-8 md:w-8' />
              <h2 >Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className='infoText'>Change the model of GPT</p>
              <p className='infoText'>Messages are store in firebase database</p>
              <p className='infoText'>Powerfull tools like toaster are also present</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className='h-6 w-6 md:h-8 md:w-8' />
              <h2 >Limitation</h2>
            </div>
            <div className="space-y-2">
              <p className='infoText'>May generate false information</p>
              <p className='infoText'>May generate harmfull instruction sometimes</p>
              <p className='infoText'>Limited information available after 2021 events </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home