'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/lib/AuthContext';

interface UserProfile {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const { token, user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!token) return;
      
      try {
        const response = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const data = await response.json();
        
        if (data.success) {
          setProfile(data.user);
        } else {
          setError(data.message || 'Failed to fetch user profile');
        }
      } catch (err) {
        setError('An error occurred while fetching your profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserProfile();
  }, [token]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}!</h2>
              
              {loading ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="p-3 bg-red-100 text-red-700 rounded-md">
                  {error}
                </div>
              ) : profile ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Name</h3>
                      <p className="mt-1">{profile.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email</h3>
                      <p className="mt-1">{profile.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Account Created</h3>
                      <p className="mt-1">{new Date(profile.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">What's Next?</h3>
                <p className="text-gray-600">
                  This is your protected dashboard page. You can only access this page when you're logged in.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="bg-gray-100 py-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Auth App. All rights reserved.</p>
        </footer>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
