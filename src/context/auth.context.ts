import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/data/supabase/client";
import { storeUser } from "@/data/func";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Set the type for the user
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const fetchUser = async () => {
      // Fetch the user first
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setTimeout(async () => {
        if (user) {
          await storeUser(user);
        }
        setUser(user ?? null);
        setLoading(false);
      }, 1500);
    };

    fetchUser();

    // Listen to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setTimeout(() => {
        setUser(session?.user ?? null);
        setLoading(false);
      }, 1500);
    });

    // Unsubscribe on cleanup
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return { user, loading };
};
