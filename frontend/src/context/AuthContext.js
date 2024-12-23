//////context/AuthContext
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // Store the user's role (admin/user)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Make a request to a protected backend route to verify authentication
        const response = await axios.get("http://localhost:9002/api/checkAuth", {
          withCredentials: true, // Ensure cookies are sent
        });

        setIsAuthenticated(true); // Mark user as authenticated
        setUserRole(response.data.role); // Save user role
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
        setUserRole(null);
      }
    };

    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await axios.post("http://localhost:9002/api/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUserRole(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};