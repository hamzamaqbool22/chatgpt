'use client'
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid"
import NewChat from "./NewChat"
import {useCollection} from "react-firebase-hooks/firestore"
import { useSession,signOut } from "next-auth/react"
import { db } from "@/firebase"
import { collection, orderBy, query } from "firebase/firestore"
import ChatRow from "./ChatRow"
// import ModelSelection from "./ModelSelection"
const Sidebar = () => {
    const {data:session} = useSession()

    const [chats,loading , error ] = useCollection(
        session && query(  collection(db,"users",session.user?.email!,"chats"),
        orderBy('createdAt','asc')
    ))
  return (
    <div>
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">

                <div>
                    <NewChat/>
                </div>
                <div className="hidden sm:inline">
                    {/* <ModelSelection/> */}
                </div>
                <div className="flex flex-col space-y-2 my-2">
                   {loading && (
                          <p className="text-white text-center animate-pulse">Loading Chats...</p>
                     )}
                                            
                   
                    {chats?.docs.map( chat => (
                        <ChatRow key={chat.id} id={chat.id}  />
                    ))}
                </div>

            </div>
            <div className="flex items-center justify-center">
                {session && (<img src={session.user?.image ?? ""} alt="profile" className="rounded-full h-11 w-11 cursor-pointer mx-3" />)}
               {session && (<p className="text-white font-semibold">{session.user?.name ?? ""}</p>)}
            </div>
               <div className="flex items-center justify-center" onClick={()=>signOut()}>
                <ArrowUpOnSquareIcon className="h-6 w-6 text-gray-300 cursor-pointer" />
               </div>
        </div>
     

    </div>
  )
}

export default Sidebar