import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-sky-500 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Assignment - BlogApp
      </Link>
      <Link className="bg-white p-2 rounded-lg" href={"/addBlog"}>
        Feeling something?? Write a message...
      </Link>
    </nav>
  );
}
