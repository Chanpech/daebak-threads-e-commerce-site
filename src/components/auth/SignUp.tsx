"use client"

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SignUp(){
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    return (
        <div className="flex flex-col items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            </div>
            <form>
                <div>
                    <label>
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
                <div>
                    <label>
                        Username
                    </label>
                    <input 
                        type="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label>
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
                <Button>
                    Sign Up
                </Button>
            </form>
            <p className="mt-4 text-center text-sm">
                Already have an account? {" "}
                <Link
                    href="/authentication"
                    className="text-blue-500 hover:underline"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}