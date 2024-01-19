'use client'
import { collection, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import { orderBy } from "@firebase/firestore"
import Message from "./Message"
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid"
import NewChat from "./NewChat"
import { signOut } from "next-auth/react"
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/solid"
type Props = {
    id:string
}

export default function ChatBox({id}:Props){
    const {data:session} = useSession()
    const [messages] = useCollection(session && query(
        collection(db,'users',session?.user?.email!, 'chats', id, 'messages'),
        orderBy('createdAt')
    ))

    return(
        <div className="flex-1 overflow-y-auto overflow-x-hidden ">
            <div  className=" flex  md:hidden lg:hidden xl:hidden py-3 w-[200px] h-[100px]">
                <div className="">
                <NewChat/>

                </div>
                <div className=" mt-3 mx-3 ">

                <div  onClick={()=>signOut()}>
                <ArrowUpOnSquareIcon className="h-6 w-6 text-gray-300 cursor-pointer" />
               </div>                </div>
            </div>
            {messages?.empty && (
                <>
                <p className="mt-10 text-center text-white">Type a prompt in below to get started!</p>
                <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
                </>
            )}
            {messages?.docs.map((message) =>(
                <Message key={message.id} message={message.data()}  />
            ))}
        </div>
    )
}