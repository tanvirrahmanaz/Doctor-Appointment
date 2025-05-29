import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <div className="text-6xl mb-4">🏥</div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <Link to="/" className="btn btn-primary btn-lg">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage