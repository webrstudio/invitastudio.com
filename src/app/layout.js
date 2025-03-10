"use client";
import "./styles/globals.css";
import { useState, useEffect } from "react";
import { NavBar, Loader, Footer } from "@/components";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <html lang="es">
        <body>
          {!loading ? (
            <>
              <NavBar />
              {children}
              <Footer />
            </>
          ) : (
            <Loader fullScreen />
          )}
        </body>
      </html>
    </>
  );
}
