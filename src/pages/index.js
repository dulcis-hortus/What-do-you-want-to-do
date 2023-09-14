import { DarkModeProvider } from "@/context/DarkModeContext";
import Home from "./Home";

export default function Index() {
  return (
    <DarkModeProvider>
      <Home />
    </DarkModeProvider>
  );
}
