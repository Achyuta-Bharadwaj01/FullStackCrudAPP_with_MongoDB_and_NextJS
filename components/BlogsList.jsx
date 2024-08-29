import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

const getBlogs = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading blogs: ", error);
    }
  };

export default async function BlogsList(){

    const {blogs} = await getBlogs();

    return(
    <>
    {blogs.map((b) => (
    <div className="p-4 border border-slate-300 my-3 flex justify-between mx-2 gap-5 items-start">
        <div>
            <h2 className="font-bold text-2xl">{b.title}</h2>
            <div>{b.description}</div>
        </div>

        <div className="flex gap-3">
            <RemoveBtn id={b._id}></RemoveBtn>
            <Link href={`/editBlog/${b._id}`}>
            <HiPencilAlt size={36}></HiPencilAlt>
            </Link>
        </div>
    </div>))}
    </>
    )
}