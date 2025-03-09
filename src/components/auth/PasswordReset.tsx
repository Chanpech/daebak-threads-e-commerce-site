'use client'

import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

export default function PasswordReset() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try{
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }catch(error: any){
        setError(error.message);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-4'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Reset Password</h2>
            <p className='text-sm text-gray-600 mb-6'>
            If you've forgotten your password, enter your email address below. We'll send you a link to reset your password.
            </p>
            {error && (
              <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                {error}
              </div>
            )}

            {success && (
              <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
                Password reset email sent! Redirecting to login page...
              </div>
            )}
        </div>
        <div>
          <form onSubmit={handlePasswordReset}>
              <div className='mb-4'>
              <label className='block text-sm font-medium mb-2' htmlFor='email'>
                Email Address 
                <span className='text-red-500'>*</span>
              </label>
              <input 
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-lg'
              />
            </div>
            <div>
              <Button
                type='submit'
                variant="default"  
                disabled={loading}
                className='bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300'          
              >
                {loading ? "Sending...": "Reset Password"}
              </Button>
            </div>
          </form>
        </div>
    </div>
  )
}
