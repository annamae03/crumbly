import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CrumbLandingPage() {
  return (
    <div className="font-sans text-neutral-800">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold tracking-tight">CRUMB</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Breads</a>
          <a href="#">Subscriptions</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>
        <Button className="rounded-full bg-yellow-600 hover:bg-yellow-700 text-white">Order Now</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 bg-gradient-to-b from-white to-yellow-50">
        <h2 className="text-4xl md:text-6xl font-semibold mb-4">Bread, Beautifully Made.</h2>
        <p className="text-lg mb-6 max-w-xl">
          Slow-fermented. Wildly flavorful. Delivered fresh to your door.
        </p>
        <div className="flex gap-4">
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">Try a Loaf</Button>
          <Button variant="outline">See How It’s Made</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-20 bg-white text-center">
        <div>
          <div className="text-3xl mb-2">🕰️</div>
          <h3 className="font-semibold mb-1">Slow Fermentation</h3>
          <p className="text-sm">48+ hour cold proof for flavor and digestibility.</p>
        </div>
        <div>
          <div className="text-3xl mb-2">🌾</div>
          <h3 className="font-semibold mb-1">Stone-Milled Grains</h3>
          <p className="text-sm">Organic flours, milled in small batches.</p>
        </div>
        <div>
          <div className="text-3xl mb-2">🚚</div>
          <h3 className="font-semibold mb-1">Fresh to Your Door</h3>
          <p className="text-sm">Baked the morning of your delivery.</p>
        </div>
      </section>

      {/* Meet the Loaves */}
      <section className="px-6 py-20 bg-yellow-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Meet the Loaves</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Classic Sourdough", "Country Loaf", "Seeded Rye"].map((name) => (
            <Card key={name} className="transition-transform hover:scale-105">
              <CardContent className="p-6">
                <div className="h-40 bg-neutral-200 mb-4 rounded-lg" />
                <h4 className="font-semibold mb-1">{name}</h4>
                <p className="text-sm text-neutral-600">
                  {name === "Classic Sourdough" && "Tangy, chewy, perfect for avocado toast."}
                  {name === "Country Loaf" && "Rustic, nutty, hearty crumb."}
                  {name === "Seeded Rye" && "Earthy and dense with a crisp crust."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 bg-white">
        <h2 className="text-3xl font-semibold mb-4">Never Run Out of Bread Again.</h2>
        <p className="max-w-xl mb-6 text-neutral-600">
          Customize your weekly loaf delivery. Pause anytime.
        </p>
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">Build My Subscription</Button>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-yellow-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Love Notes from Crumbheads</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="italic">“Truly the best bread I’ve ever had. My whole family fights over the last piece.”</p>
              <p className="text-sm mt-2 text-right">– Sarah J.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="italic">“Crumb has made me fall in love with mornings again.”</p>
              <p className="text-sm mt-2 text-right">– Eli M.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-neutral-900 text-white text-center">
        <p className="mb-4">Get 10% off your first loaf</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-full text-black max-w-xs w-full mb-4"
        />
        <div className="flex justify-center gap-4 text-sm mb-4">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Accessibility</a>
        </div>
        <p className="text-sm italic">“Thanks for loafing around with us.”</p>
      </footer>
    </div>
  );
}