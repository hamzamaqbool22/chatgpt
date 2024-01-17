'use client'
import { db } from "@/firebase"
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/solid"
import { collection, deleteDoc, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname ,useRouter} from "next/navigation"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { doc } from "firebase/firestore"
type Props = {
    id:string
}
export default function ChatRow({id}:Props){
    const pathname = usePathname()
    const router  = useRouter()
    const {data:session} = useSession()
    const [ active , setActive ] = useState(false)

    const [message] = useCollection(query(
        collection(db,'users',session?.user?.email!,'chats',id,'messages'),
        orderBy('createdAt','asc')
    ));

    useEffect(() =>{

        if (!pathname) return;
        setActive(pathname.includes(id))
    },[pathname])

    const deleteChat = async () =>{
    await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
    router.replace('/')
    
    }

    return(
        <div>
           <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
            <ChatBubbleLeftIcon className="h-5 w-5 text-white"/>
            <p className="flex-1 hidden md:inline-flex truncate">
                {message?.docs[message?.docs.length - 1]?.data().text || "New Chat"}
            </p>
             <TrashIcon onClick={deleteChat} className="h-5 w-5 text-gray-700 hover:text-red-700"/>
            </Link>
        </div>
    )
}