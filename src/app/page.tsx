import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Auth App</h1>
          <p className="text-xl mb-8">
            A Next.js application with JWT authentication
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Auth App. All rights reserved.</p>
      </footer>
    </div>
  );
}
