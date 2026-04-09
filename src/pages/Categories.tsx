import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, games } from "@/lib/games-data";
import { Gamepad2 } from "lucide-react";

const Categories = () => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <Navbar showSearch={false} />

      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-10 gradient-text neon-glow">Categories</h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => {
              const count = games.filter((g) => g.category === cat.slug).length;
              return (
                <Link
                  key={cat.id}
                  to={`/?category=${cat.slug}`}
                  className="group glass-panel p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:-translate-y-1 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none rounded-2xl" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300/30 to-blue-300/20 border border-primary/40 transition-all duration-300 group-hover:scale-110">
                      <Gamepad2 className="h-5 w-5 text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground">{cat.name}</h2>
                      <p className="text-sm text-muted-foreground">{count} games</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
