"use client"; 
import { useEffect, type ReactNode } from "react";

interface BootstrapProviderProps {
  children: ReactNode;
}

export default function BootstrapProvider({ children }: BootstrapProviderProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <>{children}</>;
}