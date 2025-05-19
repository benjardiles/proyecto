import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-400/90">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-black">Bienvenido a la Agenda</h1>
          <p className="text-xl mb-8 text-black">
            Dasarrollada por Benja, Ruben y Camilo
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="bg-black hover:bg-white  text-yellow-400 px-6 py-3 rounded-md font-medium" 
            >
              Ingresar
            </Link>
           <Link
              href="/register"
              className="bg-black hover:bg-white  text-yellow-400 px-6 py-3 rounded-md font-medium" 
            >
              Registrarse
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-black text-yellow-400 py-4 text-center">
        <p>© {new Date().getFullYear()} Agenda. All rights reserved.</p>
      </footer>
    </div>
  );
}
