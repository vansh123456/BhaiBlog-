import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
    const {id} = useParams(); //get dynamic route parameters
    const {loading,blog} = useBlog({
        id: id || ""
    });
    if(loading) {
        return <div>
            <div><Appbar/></div>
            <div className="flex justify-center">
            loading the content please wait
        </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}