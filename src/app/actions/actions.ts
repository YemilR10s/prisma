'use server'
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";


export default async function createPost(formData:FormData) {

    await prisma.post.create({
        data:{
            title: formData.get('title') as string,
            slug: formData.get('title') as string,
            content: formData.get('content') as string,
            author:{
                connect:{
                    email: 'yemil@yemil.com'
                }
            }
        }
    
    })
    
    revalidatePath('/post')
}