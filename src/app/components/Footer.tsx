import Link from "next/link";
import { FaFacebook, FaInstagram} from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Daebak Threads</h3>
                        <p className="text-gray-400">Your one-stop destination for modern fashion</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href='/products' className="text-gray-400 hover:text-white">Products</Link>
                            </li>
                            <li>
                                <Link href='/categories' className="text-gray-400 hover:text-white">Categories</Link>

                            </li>
                            <li>
                                <Link href='/about' className="text-gray-400 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link href='/contact' className="text-gray-400 hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; 2024 ModernThreads. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}