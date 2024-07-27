import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/posts">
            <h1 className="font-bold text-2xl mb-4 ">Web Blog Project</h1>
            </Link>
            <Button className="bg-sky-700 hover:bg-sky-600 px-3 py-2 rounded-xl font-semibold">
            <Link to="/posts-create">Crear Post</Link>
            </Button>
        </div>
    )
}