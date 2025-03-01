'use client';

import React from 'react'
import { Button } from '../ui/button';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function Logout() {

    const handleLogOut = async () => {
        try{
            alert("Logged Out");
            await signOut(auth);
        }   catch (error: any){
            console.error("Error loggingout", error);
        };
    };

  return (
    <Button
        onClick={handleLogOut}
    >
        Logout
    </Button>
  )
}
