import { DocumentData } from "firebase-admin/firestore";
type Props = {
    message: DocumentData
}
export default function Message({message}:Props){
    const isCHat = message.user.name === 'Bot'
    return(
        <div className={`py-5 text-white ${isCHat && "bg-[#434654]"}`}>
            
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <img src={message.user.avatar} alt="" className="h-8 w-8"/>
            <p className="pt-1 text-sm">{message.text}</p>
        </div>
        </div>
    )

}