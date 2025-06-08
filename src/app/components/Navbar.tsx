import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-5 px-10 z-20 bg-white/80 backdrop-blur-sm">
            <div className="font-bold text-lg">ThanyapisitLim</div>

            <ul className="flex space-x-5">
                <Link className="hover:bg-gray-200 rounded-2xl p-3 transition duration-200" href="/">Home</Link>
                <Link className="hover:bg-gray-200 rounded-2xl p-3 transition duration-200" href="/project">Project</Link>
                <Link className="hover:bg-gray-200 rounded-2xl p-3 transition duration-200" href="/resume">Resume</Link>
            </ul>
        </nav>
    );
}