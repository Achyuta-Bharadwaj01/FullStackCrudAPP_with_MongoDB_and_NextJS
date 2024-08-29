'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and Description must be filled.");
            return;
        }

        try{
            const res = await fetch('http://localhost:3000/api/blogs',{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({title, description}),
            });

            if (res.ok) {
                router.push('/')
            } else{
                throw new Error("Failed to create a BlogPost");
            }
        } catch(error) {
            console.log(error)
        }

    };


    return(<div className="flex flex-col gap-3">
        <p className="text-sky-700">Feeling a little chatty today...?</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

        <input type="text" placeholder="Enter your Name..." 
        className="border border-slate-500 px-8 py-2"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}></input>

        <input type="text" placeholder="Tell the world what you're feeling...." 
        className="border border-slate-500 px-8 py-2"
        onChange={(e)=>setDescription(e.target.value)}
        value={description}></input>

        <button className="bg-sky-500 font-bold text-white py-2 px-4 w-fit rounded-lg" type="submit">
            Let them know !!!
        </button>
    </form>
    </div>);
}