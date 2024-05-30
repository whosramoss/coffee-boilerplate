import { ExampleProvider } from "@providers/ExampleProvider";
import { ThemeProvider } from "@providers/ThemeProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export default async function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <ExampleProvider>{children}</ExampleProvider>
    </ThemeProvider>
  );
}
