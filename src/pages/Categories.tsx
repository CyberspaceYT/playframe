import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, games } from "@/lib/games-data";
import { Gamepad2 } from "lucide-react";

const Categories = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar showSearch={false} />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-8">Categories</h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => {
              const count = games.filter((g) => g.category === cat.slug).length;
              return (
                <Link
                  key={cat.id}
                  to={`/?category=${cat.slug}`}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                      <Gamepad2 className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h2 className="font-semibold">{cat.name}</h2>
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
