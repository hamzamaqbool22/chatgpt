import query from "@/lib/queryapi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin'
import { admindb } from "@/firebaseadmin";
type Data = {
    answer: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { message, chatId,session } = req.body
   

    if (!message || !chatId) {
        res.status(400).json({ answer: "Please enter a message" })
        return
    }
    const response = await query(message)
    console.log("my response ",response)
    
    const prompt: Message = {

        text: response || 'Sorry, I did not understand that.',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "Chatgpt",
            name: "Bot",
            avatar: "https://links.papareact.com/89k",
        }

    }

    await admindb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(prompt)

    res.status(200).json({ answer: prompt.text })
}