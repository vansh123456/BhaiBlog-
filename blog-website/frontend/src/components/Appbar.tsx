import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4" >
        <div>
            Bhai-Blog!
        </div>
        <div>
            <Avatar size= {"big"} name={"Vansh"} />
        </div>
    </div>
}