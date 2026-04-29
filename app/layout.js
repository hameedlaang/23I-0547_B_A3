// app/layout.js

import "./globals.css";

export const metadata = {
  title: "Property Dealer CRM",
  description: "CRM System using Next.js + MongoDB"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}