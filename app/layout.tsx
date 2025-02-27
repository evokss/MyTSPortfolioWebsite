import "./styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
