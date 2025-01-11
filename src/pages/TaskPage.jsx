import { useSearchParams } from "react-router-dom"

export default function TaskPage() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return(
        <div className="bg-[#2e2e2e] w-screen h-screen p-6">
           <h1>{title}</h1>
           <h1>{description}</h1>
        </div>
    )
}