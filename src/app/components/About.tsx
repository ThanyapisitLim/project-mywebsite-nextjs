"use client"
import { useEffect, useState } from "react";

type Repo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
};

export default function About() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/users/ThanyapisitLim/repos")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch");
                }
                return res.json();
            })
            .then((data) => {
                const allowedNames = [
                    "project-fsstore-nextjs",
                    "project-todoapp-nextjs",
                    "practice-ajaek-bootcamp",
                ];
                const filtered = data.filter((repo: Repo) => allowedNames.includes(repo.name));
                setRepos(filtered);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div>
                <div className="bg-white shadow-lg rounded-3xl p-10 my-8 mx-50">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <hr className="my-10" />
                    <section>
                        <div className="space-y-3 text-xl">
                            <p className="font-bold text-2xl">Hello! My name is Thanyapisit.</p>
                            <p>
                                I am currently studying at Srinakharinwirot University, in the
                                Faculty of Social Communication Innovation, majoring in
                                Communication Computer.
                            </p>
                            <p>
                                At university, I have learned Swift programming and iOS development
                                as part of my curriculum. Beyond the classroom, I am continuously
                                improving my skills in web development — including both frontend and
                                backend — as well as working with databases.
                            </p>
                            <p>
                                I’m passionate about creating clean, user-friendly web applications
                                and always eager to explore new technologies in the development
                                world.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="bg-white shadow-lg rounded-3xl p-10 my-8 mx-50">
                    <section className="my-10">
                        <h2 className="text-2xl font-semibold mb-3">Projects I’d Like to Showcase</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {repos.map((repo) => (
                                <li
                                    key={repo.id}
                                    className="border p-4 rounded shadow hover:shadow-md transition-shadow"
                                >
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-semibold text-blue-600 hover:underline"
                                    >
                                        {repo.name === "project-fsstore-nextjs"
                                            ? "🛒 FS Store (Next.js)"
                                            : repo.name === "project-todoapp-nextjs"
                                                ? "📝 To-Do App (Next.js)"
                                                : repo.name === "practice-ajaek-bootcamp"
                                                    ? "💻 Ajaek Bootcamp Practice"
                                                    : repo.name}
                                    </a>
                                    <p className="text-sm text-gray-700">
                                        {repo.description || "No description provided."}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className="bg-white shadow-lg rounded-3xl p-10 my-8 mx-50">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Goals</h2>
                        <p>
                            Right now, I’m passionate about becoming a web developer. I have a good understanding of various concepts such as fetching APIs, API routing, working with Next.js, Node.js, and using npm.
                        </p>
                        <p>
                            However, in the future, my goals may evolve into something even greater — as the rising trend in AI continues to grow rapidly, it’s an area I’m also interested in exploring further.
                        </p>
                    </section>
                </div>
                <div className="bg-white shadow-lg rounded-3xl p-10 my-8 mx-50">
                    {/* Skill Section */}
                    <h1 className="text-3xl font-bold my-5">Skill</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Frontend Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4">Frontend</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Tailwind CSS</li>
                                <li>ShadCN UI</li>
                                <li>Bootstrap 5</li>
                            </ul>
                        </div>

                        {/* Backend Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4">Backend</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Node.js</li>
                                <li>Next.js</li>
                                <li>BetterAuth</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>

                        {/* Database Card */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4">Database</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Drizzle ORM</li>
                                <li>SQL</li>
                                <li>SQLite</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4">Tools</h2>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>VS Code</li>
                                <li>Xcode</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Postman</li>
                                <li>DBver</li>
                                <li>Xampp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
