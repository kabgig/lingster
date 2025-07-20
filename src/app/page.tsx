"use client";

import { supabase } from "@/lib/supabase";

export default function Home() {
  // Test Supabase connection
  const testConnection = async () => {
    try {
      // Most basic connection test - just get the current session
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Supabase connection error:", error);
        alert(`Connection failed: ${error.message}`);
      } else {
        console.log("Supabase connection successful!", data);
        alert("✅ Supabase connection is working! Check console for details.");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert(`Unexpected error: ${err}`);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Lingster - Spanish Verbs</h1>
        <p className="text-lg text-center sm:text-left">
          Learn Spanish verbs with interactive exercises
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={testConnection}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Test Supabase Connection
          </button>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          Local Supabase PostgreSQL Database Ready
        </p>
      </footer>
    </div>
  );
}
