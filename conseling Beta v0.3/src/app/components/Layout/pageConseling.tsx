export default function Home() {
  return (
    <aside className="lg:w-64 w-full bg-gray-800 text-white flex-shrink-0 ">
      <div className="p-6">
        <h2 className="text-xl font-semibold">Konseling</h2>
      </div>
      <nav className="px-4">
        <a
          href="/User/Login"
          className="block py-2 px-3 rounded bg-blue-600 text-white"
        >
          Back to Login
        </a>
        <br />
        <a
          href="/"
          className="block py-2 px-3 rounded bg-blue-600 text-white"
        >
          Landing Page
        </a>
        <h3 className="mt-4 mb-2 text-sm font-bold uppercase">Menu</h3>
        <ul>
          <li>
            <a
              href="/Dashboard/Article"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Artikel
            </a>
          </li>
          <li>
            <a
              href="/Dashboard/Pengumuman"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Pengumuman
            </a>
          </li>
          <li>
            <a
              href="/User/Password"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Edit Pass User
            </a>
            
          </li>
          <li>
            <a
              href="/User/Register"
              className="block py-2 px-3 rounded hover:bg-gray-700"
            >
              Register
            </a>
            
          </li>
        </ul>
      </nav>
    </aside>
  );
}
