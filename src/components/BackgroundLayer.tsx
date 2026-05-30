"use client";
import { useTheme } from "@/app/lib/store";
import ShaderBackground from "./ShaderBackground";

// Bridges the global theme store to the (client-only) WebGL background so the
// noir shader can live in the server-rendered root layout.
const BackgroundLayer = () => {
  const { darkMode } = useTheme();
  return <ShaderBackground darkMode={darkMode} />;
};

export default BackgroundLayer;
