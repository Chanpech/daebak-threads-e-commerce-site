"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();     // Prevent default form submission behavior
        setLoading(true);
        
        try{
            alert("Trying to log in")
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged In")
            router.push("/")    //Redirect to home page
        }catch( error: any){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-md w-96'>
            <h2 className='text-2xl font-bold mb-6 text-center'>
                Login
            </h2>
            {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
        </div>
        <form onSubmit={handleLogin}>
            <div className='mb-4'>
                <label className='block text-sm font-medium mb-2' htmlFor='email'>
                    Email
                </label>
                <input 
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded-lg'
                    required
                />
            </div>
            <div className='mb-6'>
                <label className='block text-sm font-medium mb-2' htmlFor='password'>
                    Password
                </label>
                <input 
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-2 border border-gray-300 rounded-lg'
                    required
                />
            </div>
            <Button
                type='submit'
                className='hover:bg-blue-600'
                disabled={loading}
            >
                {loading ? "Logging In..." : "Login"}
            </Button>
        </form>
        <p className=''>
            Don't have an account? {" "}
            <Link href="/registration" className='text-blue-500 hover:underline'>
                Sign-Up
            </Link>
        </p>
    </div>
  )
}

export default Login