import { LoaderCircle } from "lucide-react";
import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
export const ProtectedRoute = () => {
  const { session: session, loading: loading } = useAuth();
  return loading ? (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <LoaderCircle className="w-8 h-8 animate-spin text-indigo-600" />
    </div>
  ) : session ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
