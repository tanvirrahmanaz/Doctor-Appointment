import { useState } from 'react'

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Add search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl mx-4 lg:mx-8 mt-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Dependable Care, Backed by{' '}
              <span className="text-blue-600">Trusted Professionals</span>.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine check-up or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                placeholder="Search any doctor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered flex-1 bg-white"
              />
              <button
                type="submit"
                className="btn btn-primary px-8"
              >
                Search Now
              </button>
            </form>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Doctor Image 1 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="font-semibold text-gray-800">Dr. Sarah Wilson</h3>
                    <p className="text-sm text-gray-600">Cardiologist</p>
                  </div>
                </div>
              </div>

              {/* Doctor Image 2 */}
              <div className="relative mt-8">
                <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="font-semibold text-gray-800">Dr. Michael Chen</h3>
                    <p className="text-sm text-gray-600">Neurologist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner