import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { getServerSession } from 'next-auth'
import { SessionProvider } from '@/components/SessionProvider'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My GPT',
  description: 'My Gpt model for fun',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>

        <SessionProvider session={session}>
          {!session ? (
            <div>
              <Login />
            </div>
          ) : (
            <div className='flex'>
              <div className=' bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w[20rem] '>
                <Sidebar />
              </div>

              <ClientProvider />

              <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}
