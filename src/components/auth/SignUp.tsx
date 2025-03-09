"use client"

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignUp(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => { 
        e.preventDefault();
        setLoading(true);
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("Successfully Signed Up")
            router.push("/")    //Redirect to home page
        }catch(error: any){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            </div>
            <form onSubmit={handleSignUp}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email
                    </label> 
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />  
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <Button
                    type="submit"
                    className="hover-bg-blue-600"
                    disabled={loading}
                >
                    {loading ? "Signing Up..." : "Sign Up"}
                </Button>
            </form>
            <p className="mt-4 text-center text-sm">
                Already have an account? {" "}
                <Link
                    href="/login"
                    className="text-blue-500 hover:underline"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}