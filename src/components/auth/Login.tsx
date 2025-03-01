"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

function Login() {
    const [email, setEmail] = useState<string>("johndoe@email.com");
    const [password, setPassword] = useState<string>("");
    
    const handleLogin = async () => {

        try{
            alert("Logged In")
        }catch( error: any){

        }
    };

    return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-md w-96'>
            <h2 className='text-2xl font-bold mb-6 text-center'>
                Login
            </h2>
        </div>
        <form onSubmit={handleLogin}>
            <div>
                <label className=''>
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
            <div>
                <label>
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
            <Button>
                Login
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