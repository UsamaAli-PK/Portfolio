import React from 'react';
import { Lock, Mail, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  error?: string;
}

export function LoginForm({ 
  email, 
  setEmail, 
  password, 
  setPassword, 
  isLoading, 
  onSubmit,
  error 
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}
      <div>
        <label className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200 placeholder-gray-500"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-300 mb-2 text-sm font-medium">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200 placeholder-gray-500"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
      >
        {isLoading ? (
          <>
            <Loader className="animate-spin" size={20} />
            <span>Logging in...</span>
          </>
        ) : (
          <span>Login to Dashboard</span>
        )}
      </motion.button>
    </form>
  );
}