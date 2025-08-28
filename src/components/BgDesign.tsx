export function BGDesign() {
  return (
    <div className="bg-design w-full h-full absolute top-0 left-0 -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
    </div>
  );
}
