import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";

export const Blog = () => {
    const {id} = useParams(); //get dynamic route parameters
    const {loading,blog} = useBlog({
        id: id || ""
    });
    if(loading) {
        return <div>
            <Appbar/>
            <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
            <Spinner/>
            </div>
        </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}