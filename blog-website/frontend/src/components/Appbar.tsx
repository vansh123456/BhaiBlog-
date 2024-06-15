import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4" >
        <Link to={'/'} className="cursor-pointer">
        <div>
            Bhai-Blog!
        </div>
        </Link>
        <div>
        <div>
            <Link to={'/publish'} >
        <button type="button" className=" mr-10 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New-blog</button>
        </Link>
            <Avatar size= {"big"} name={"Vansh"} />
        </div>
        </div>
    </div>
}