import ChatBox from "@/components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
    params:{
        chatid:string
    }
}
export default function Chat({params:{chatid}}: Props){
    
    return(
        <div className="flex flex-col h-screen overflow-hidden">
            <ChatBox id={chatid} />
            <ChatInput id = {chatid}/>
        </div>
    )
}