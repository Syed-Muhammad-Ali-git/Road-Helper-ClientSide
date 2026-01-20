import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-6 p-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Project Started
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Firebase Hosting & Firestore configured.
        </p>
      </main>
    </div>
  );
}
