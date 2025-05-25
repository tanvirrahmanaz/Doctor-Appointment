import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'My-Bookings', path: '/my-bookings' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact-us' },
  ]

  // Check if current path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname === path
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="navbar-start">
        {/* Mobile menu dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52 border border-gray-200">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path) 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={item.path === '/' ? scrollToTop : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link 
          to="/" 
          className="btn btn-ghost text-xl font-bold text-blue-600 hover:bg-transparent"
          onClick={scrollToTop}
        >
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.152.83L18 6l-.295.07a1 1 0 01-1.194-.76l-.83-.415-3.153 1.262a8.044 8.044 0 01-.124 1.913A12.032 12.032 0 0110 12c0 5.202 3.206 9.67 7.73 11.57a1 1 0 01.135 1.676l-3.75-4.2a1 1 0 011.478-1.352l6.462 7.25a1 1 0 01-1.538 1.332l-2.612-2.93C14.655 19.748 12.422 20 10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10z" clipRule="evenodd" />
            </svg>
          </div>
          Phudu
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-200 relative ${
                  isActive(item.path) 
                    ? 'text-blue-600 bg-blue-50 shadow-sm' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={item.path === '/' ? scrollToTop : undefined}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Emergency Button */}
      <div className="navbar-end">
        <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Emergency
        </button>
      </div>
    </div>
  )
}

export default Navbar