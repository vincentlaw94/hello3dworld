import "./globals.css";

export const metadata = {
  title: "hello 3d world",
  description: "Sandbox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
