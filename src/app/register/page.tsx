'use client';

import React, { useEffect } from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen flex flex-col bg-yellow-400/90">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 border-2 border-yellow-400">
          <h1 className="text-3xl font-bold mb-6 text-black">Crear Cuenta</h1>
          <RegisterForm />
        </div>
      </main>
      
      <footer className="bg-black text-yellow-400 py-4 text-center">
        <p>© {new Date().getFullYear()} Agenda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RegisterPage;
