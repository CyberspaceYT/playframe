import Navbar from "@/components/Navbar";

const Create = () => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <Navbar showSearch={false} />
      <div className="flex-1 relative z-10">
        <iframe
          src="/create-editor.html"
          title="HTML Editor"
          className="h-[calc(100vh-64px)] w-full border-none"
          sandbox="allow-scripts allow-same-origin allow-downloads allow-popups"
        />
      </div>
    </div>
  );
};

export default Create;
