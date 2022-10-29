import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Link to="/" className="underline">
                Home
            </Link>
            <h1 className="text-red-500 text-xl">Not Found</h1>
        </>
    );
}
