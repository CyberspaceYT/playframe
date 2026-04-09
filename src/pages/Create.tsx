import Navbar from "@/components/Navbar";

const Create = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar showSearch={false} />
      <div className="flex-1">
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
