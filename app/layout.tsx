import "./styles/globals.css";
import { Navbar } from "@/components/navigation";

export const metadata = {
  title: "Eva's Development Space",
  description:
    "Here is Eva's personal website, showcasing her self-made projects along with a few stories about herself.",
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
