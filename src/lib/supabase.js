const SESSION_KEY = "mowitex-preview-session";
const listeners = new Set();
const readSession = () => {
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return memorySession;
  }
};
let memorySession = null;
const writeSession = (session) => {
  memorySession = session;
  try {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  } catch {}
  listeners.forEach((listener) =>
    listener(session ? "SIGNED_IN" : "SIGNED_OUT", session),
  );
};
const makeSession = (email, fullName) => ({
  access_token: "preview-token",
  user: {
    id: "preview-user",
    email: email,
    user_metadata: { full_name: fullName || email.split("@")[0] },
  },
});
export const supabase = {
  auth: {
    async getSession() {
      return { data: { session: readSession() ?? memorySession }, error: null };
    },
    onAuthStateChange(callback) {
      listeners.add(callback);
      return {
        data: {
          subscription: { unsubscribe: () => listeners.delete(callback) },
        },
      };
    },
    async signInWithPassword({ email: email }) {
      let savedName;
      try {
        savedName = JSON.parse(
          localStorage.getItem("mowitex-preview-names") || "{}",
        )[email];
      } catch {}
      writeSession(makeSession(email, savedName));
      return { error: null };
    },
    async signUp({ email: email, options: options }) {
      try {
        const names = JSON.parse(
          localStorage.getItem("mowitex-preview-names") || "{}",
        );
        names[email] = options?.data?.full_name;
        localStorage.setItem("mowitex-preview-names", JSON.stringify(names));
      } catch {}
      return { error: null };
    },
    async signOut() {
      writeSession(null);
    },
    async getUser() {
      return { data: { user: readSession()?.user ?? null }, error: null };
    },
  },
  channel() {
    const channel = { on: () => channel, subscribe: () => channel };
    return channel;
  },
  removeChannel() {},
};
