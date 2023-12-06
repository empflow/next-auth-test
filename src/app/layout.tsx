import Nav from "@/ui/Nav";
import "./globals.css";

export const metadata = {
  title: "Next auth",
  description: "Testing next auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="m-2">{children}</main>
      </body>
    </html>
  );
}
