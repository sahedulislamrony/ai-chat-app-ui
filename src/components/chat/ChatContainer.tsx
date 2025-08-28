interface ChatContainerProps {
  children: React.ReactNode;
}

export function ChatContainer({ children }: ChatContainerProps) {
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-background flex flex-col">
      {children}
    </div>
  );
}
