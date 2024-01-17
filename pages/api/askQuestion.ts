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
    const { message, chatId, model,session } = req.body
   

    if (!message || !chatId) {
        res.status(400).json({ answer: "Please enter a message" })
        return
    }
    const response = await query(message, model,chatId)
    const prompt: Message = {

        text: response || "Sorry, I don't know what you mean.",
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