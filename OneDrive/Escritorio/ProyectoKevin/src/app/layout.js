import { Inter } from "next/font/google";
import "../styles/styles.css";
import "../styles/misEstilos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventario tienda",
  description: "Sitio para guardar inventario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
