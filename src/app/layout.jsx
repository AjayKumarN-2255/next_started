import Navbar from "./_components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Contact App",
  description: "This is a basic contact app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
