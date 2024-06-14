import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
    <div ><Appbar/></div>
    <div className="flex justify-center">
      <div >
        <BlogCard 
                authorName={"Vansh"}
                title = {"how to actually get bitches"}
                content={"yes yes yes"}
                publishedDate={"2nd feb 2024"}
            />
            <BlogCard 
                authorName={"Vansh"}
                title = {"how to actually get bitches"}
                content={"yes yes yes"}
                publishedDate={"2nd feb 2024"}
            />
    </div>  
</div>
</div>
}