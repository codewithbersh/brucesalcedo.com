export const Header = () => {
  return (
    <div className="space-y-10 px-4">
      <div className="space-y-2">
        <h1
          className="animate-fade-up font-semibold opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.15s" }}
        >
          Bruce Salcedo
        </h1>
        <h2
          className="animate-fade-up text-muted-foreground opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.30s" }}
        >
          Web Developer
        </h2>
      </div>
      <p
        className=" animate-fade-up opacity-0"
        style={{ animationFillMode: "forwards", animationDelay: "0.45s" }}
      >
        A passionate developer with a love for minimal and high-quality designs.
        Open to full-time or freelance opportunities
      </p>
    </div>
  );
};
