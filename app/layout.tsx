import "./styles/globals.css";
import Navbar from "@/components/navigation/Navbar";

export const metadata = {
  title: "Eva Koss - Crafting Digital Experiences with React & TypeScript",
  description:
    "Welcome to my digital portfolio! I'm Eva, a passionate frontend developer specializing in React and TypeScript. Here you'll find my latest projects, technical insights, and a glimpse into my journey in web development.",
  icons: {
    icon: "/icons/rocket.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
