"use client"
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
};

export default function Project() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/ThanyapisitLim/repos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 mt-20 mb-10">
      <h1 className="text-3xl font-bold text-center mb-10">My GitHub Projects</h1>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline break-words"
            >
              {repo.name.startsWith("project") ? "🚀" : "📁"} {repo.name}
            </a>
            <p className="text-sm text-gray-600 mt-2">
              {repo.description || "No description provided."}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
