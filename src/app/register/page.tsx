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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Auth App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RegisterPage;
