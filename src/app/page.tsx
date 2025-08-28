import { MainLayoutHome } from "@/components/main-window";

export default function Home() {
  return (
    <MainLayoutHome>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the ChatGPT App</h1>
        <p className="mt-2">
          This is a simple chat application built with Next.js.
        </p>
      </div>
    </MainLayoutHome>
  );
}
