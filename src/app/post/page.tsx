'user server'
import Link from "next/link"
import prisma from "../lib/db"
import createPost from "../actions/actions"

export default async function PostsPage(){

    /* const myPosts = await prisma.post.findMany() */

    const users = await prisma.user.findUnique({
        where:{
            email: 'yemil@elpaspi.com'
        },
        include:{
            posts: true
        }
    })
  
    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>We have ({users?.posts.length}) Post</h1>
            <ul>
                {users?.posts.map((post)=>(
                    <Link key={post.id} href={`/post/${post.slug}`}>
                        <li>{post.title}</li>
                    </Link>
                ))}
            </ul>
            <div className="mt-8 bg-slate-700 p-8">
                <form action={createPost} className="flex flex-col gap-6">
                    <input type="text" name="title" placeholder="Escribe el titulo" />
                    <textarea name="content" id="" placeholder="Escribe el contenido"></textarea>
                    <button type="submit" className="border border-white">Send</button>
                </form>
            </div>
        </div>
    )
}