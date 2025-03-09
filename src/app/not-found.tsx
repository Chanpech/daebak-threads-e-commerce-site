import Link from "next/link";

export default function NotFound(){
    return (
        <div>
            <h2>Page Not Found</h2>
            <h4>404</h4>
            <p>
                <Link href="/">
                    Return to Home
                </Link>
            </p>
        </div>
    );
}