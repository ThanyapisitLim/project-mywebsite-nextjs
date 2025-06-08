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
      <h1 className="text-4xl font-bold">About Me</h1>

      <section>
        <div className="space-y-3">
          <p>Hello! My name is Thanyapisit.</p>
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

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Projects I’d Like to Showcase</h2>
        <ul className="space-y-4 columns-3">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="border p-4 rounded shadow hover:shadow-md"
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

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Goals</h2>
        <p>
          พัฒนาทักษะด้าน Full-stack, เรียนรู้การ deploy โปรเจคจริง และเข้าใจระบบ
          authentication มากขึ้น
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Fun facts</h2>
        <p>
          ผมชอบออกแบบ UI เล่นบน Figma และมักจะฟังเพลง Lo-fi ตอนเขียนโค้ด
        </p>
      </section>
    </>
  );
}
