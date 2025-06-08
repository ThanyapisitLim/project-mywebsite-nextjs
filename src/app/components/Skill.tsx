export default function Skill() {
  return (
    <div className="px-8 py-6">
      {/* Skill Section */}
      <h1 className="text-3xl font-bold ml-4 my-5">Skill</h1>
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
  );
}