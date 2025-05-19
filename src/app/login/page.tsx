'use client';

import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {
  const searchParams = useSearchParams();
  const registered = searchParams.get('registered') === 'true';

  return (
    <div className="min-h-screen flex flex-col bg-yellow-400/90">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 border-2 border-yellow-400">
          {registered && (
            <div className="mb-4 p-3 bg-yellow-400/30 text-black font-medium rounded-md text-center">
              Registro exitoso! 
            </div>
          )}
          <h1 className="text-3xl font-bold mb-6 text-black">Ingresa</h1>
          <LoginForm />
        </div>
      </main>
      
      <footer className="bg-black text-yellow-400 py-4 text-center">
        <p>© {new Date().getFullYear()} Agenda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
