import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center px-2 h-screen text-white">
      <h3 className='text-5xl font-bold mb-20'>My GPT</h3>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className='h-8 w-8' />
            <h2 >Examples</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>Lorem ipsum dolor sit.</p>
            <p className='infoText'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <p className='infoText'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className='h-8 w-8' />
            <h2 >Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>Lorem ipsum dolor sit.</p>
            <p className='infoText'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <p className='infoText'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2 >Limitation</h2>
          </div>
          <div className="space-y-2">
            <p className='infoText'>Lorem ipsum dolor sit.</p>
            <p className='infoText'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <p className='infoText'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home