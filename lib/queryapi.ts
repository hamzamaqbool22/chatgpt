
import openai from "./chatgpt";

const query = async (prompt:string) =>{
   const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
   })


   let res = response.choices[0].message.content;
   return res;

  
};

export default query;