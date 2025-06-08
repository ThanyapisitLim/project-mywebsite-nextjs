import Link from "next/link"

export default function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center my-5 mx-10">
            <div className="font-bold text-lg">ThanyapisitLim</div>

            <ul className="flex space-x-5">
                <Link className="hover:bg-gray-200 rounded-2xl p-3 transition duration-200" href="/">Home</Link>
                <Link className="hover:bg-gray-200 rounded-2xl p-3 transition duration-200" href="/project">Project</Link>
                <Link className="hover:bg-gray-200 rounded-2xl p-3 transition duration-200" href="/resume">Resume</Link>
            </ul>
        </div>
    </>
  );
}