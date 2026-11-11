import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../lib/supabase";
const AuthContext = createContext({
  session: null,
  user: null,
  loading: true,
  signOut: async () => {},
});
export const AuthProvider = ({ children: children }) => {
  const [currentSession, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadSession = async () => {
      try {
        const {
          data: { session: session },
          error: error,
        } = await supabase.auth.getSession();
        if (error) throw error;
        setSession(session);
        setUser(session?.user ?? null);
      } catch (err) {
        console.error("Failed to get session:", err);
        setSession(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    const { data: data } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setLoading(false);
      },
    );
    loadSession();
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <AuthContext.Provider
      value={{
        session: currentSession,
        user: user,
        loading: loading,
        signOut: signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
