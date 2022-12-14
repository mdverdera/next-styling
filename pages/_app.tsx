import "bootstrap/dist/css/bootstrap.css";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
