'use client'
import { db } from "@/firebase"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
// import ModelSelection from "./ModelSelection"
// import useSWR from "swr"

type Props = {
    id: string
}
export default function ChatInput({ id }: Props) {
    const [message, setMessage] = useState("")
    const {data:session} = useSession()
    
    // const {data: model } = useSWR('model',{
    //     fallbackData:"text-davinci-003"
    
    // })

  

    const sendMessage = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (!message) return;
        const input = message.trim()
        setMessage('')
        const Prompt: Message = {
            text:input,
            createdAt:serverTimestamp(),
            user:{
                
                _id:session?.user?.email!,
                name:session?.user?.name!,
                avatar:session?.user?.image! || `https://ui-avatars.com/api/?name =${session?.user?.name }`,
            }
        }
        await addDoc(collection(db,'users',session?.user?.email!, 'chats', id, 'messages'), Prompt)

        const notification = toast.loading("Chatting...")



        try {
            const response = await fetch ('/api/askQuestion',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    message:input,chatId:id,session,
                })
            })
   
            if (!response.ok){
                const errormes = await response.text();
            
                throw new Error(errormes)
            }
            await response.json()
            toast.success("Chatting successfull",{id:notification})

        } catch (error) {
           
            toast.error("Failed to send message")
            
        }

    } 
    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">

            <form onSubmit={sendMessage} className="p-5 space-x-5 flex" >

                <input className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed"  type="text " placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value) } />
                <button  className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-600" disabled={!message || !session} type="submit">
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45 " />
                </button>
            </form>

            <div className="md:hidden">
                {/* <ModelSelection/> */}
            </div>
        </div>
    )
}