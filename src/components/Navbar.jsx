import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'My Bookings', path: '/my-bookings' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' }
  ]

  return (
    <div className="navbar bg-white shadow-sm px-4 lg:px-8">
      {/* Logo */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Phudu</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-blue-500 font-semibold'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button className="btn btn-primary btn-sm mt-2">Emergency</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`px-0 ${
                  location.pathname === item.path
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <button className="btn btn-primary">Emergency</button>
      </div>
    </div>
  )
}

export default Navbar