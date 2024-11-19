import prisma from "@/app/lib/db"

export default async function PostPage({params}){
    const myPost = await prisma.post.findUnique({
        where:{
            slug: params.slug
        }
    })
    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <h1>{myPost?.content}</h1>
        </div>
    )
}