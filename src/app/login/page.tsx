'use client';

import React, { useEffect } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/lib/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get('registered');

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
          {registered && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
              Registration successful! Please log in.
            </div>
          )}
          <LoginForm />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Auth App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
