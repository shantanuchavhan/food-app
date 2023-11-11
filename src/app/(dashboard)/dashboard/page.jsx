"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function Dashboard(){
    const {status,data}= useSession()
    const router=useRouter()
    if(status=="authenticated"){
        router.push(`/dashboard/${data.user.name}`)
        return 
    }
    else if (status === "loading") {
        return <div >Loading...</div>;
      }
    else{
        router.push("/dashboard/signin")
    }
}