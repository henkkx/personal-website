import "@/styles/main.css";
import "@/styles/prism.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import BaseLayout from "@/layouts/base-layout";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <BaseLayout>
        <NextNProgress showOnShallow={true} color="rgb(59 130 246 / 0.5)" />
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}
