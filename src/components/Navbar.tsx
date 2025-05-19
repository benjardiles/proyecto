'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="bg-black text-yellow-400 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-yellow-400">
          Agenda
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-yellow-400 hover:text-yellow-200 transition-colors">
            Inicio
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="text-yellow-400 hover:text-yellow-200 transition-colors">
                Dashboard
              </Link>
              <div className="flex items-center">
                <span className="mr-2 text-yellow-200">Welcome, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-800 hover:bg-gray-700 text-yellow-400 px-3 py-1 rounded-md text-sm transition-colors"
                >
                  Salir
                </button>
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="text-yellow-400 hover:text-yellow-200 transition-colors">
                Ingresar
              </Link>
              <Link
                href="/register"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium transition-colors"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
