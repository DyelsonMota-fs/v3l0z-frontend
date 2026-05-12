import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Countries App",
  description: "Aplicação para listar, buscar e filtrar países.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
