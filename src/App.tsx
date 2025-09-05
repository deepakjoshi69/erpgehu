import React, { useState } from 'react';
import { User, Lock, AlertTriangle, GraduationCap, Server, Wifi } from 'lucide-react';

function App() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showServerDown, setShowServerDown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login attempt
    setTimeout(() => {
      setIsLoading(false);
      setShowServerDown(true);
    }, 2000);
  };

  const resetForm = () => {
    setShowServerDown(false);
    setStudentId('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GEHU</h1>
                <p className="text-xs text-gray-500">Graphic Era Hill University</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Student Portal
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Student Portal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access your academic information, course materials, examination results, and more through our comprehensive student management system.
            </p>
          </div>

          {/* University Image Placeholder */}
          <div className="mb-12">
            <div className="relative w-full h-64 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="University Campus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Graphic Era Hill University</h3>
                <p className="text-blue-100">Excellence in Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="max-w-md mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {!showServerDown ? (
            <>
              {/* Login Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-white text-center">Student Login</h3>
                <p className="text-blue-100 text-center mt-2">Enter your credentials to access portal</p>
              </div>

              {/* Login Form */}
              <div className="px-8 py-8">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-semibold text-gray-700 mb-2">
                      Student ID / Roll Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your student ID"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Logging in...
                      </div>
                    ) : (
                      'Login to Portal'
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </>
          ) : (
            /* Server Down Message */
            <div className="px-8 py-12 text-center">
              <div className="mb-6">
                <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Server className="h-10 w-10 text-red-600" />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-semibold text-yellow-800">Server Maintenance</h3>
                  </div>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    The student portal is currently undergoing maintenance. Please try again later.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Wifi className="h-4 w-4" />
                  <span>Server Status: Offline</span>
                </div>
                
                <p className="text-gray-500 text-sm">
                  We apologize for the inconvenience. Our technical team is working to resolve this issue.
                </p>

                <button
                  onClick={resetForm}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center space-x-6">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Academic Calendar</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help & Support</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact IT</a>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          © 2025 Graphic Era Hill University. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
