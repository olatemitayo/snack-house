import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PiCaretDownBold } from "react-icons/pi";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={{
          components: {
            Select: {
              defaultProps: {
                rightSection: <PiCaretDownBold size={14} color="#9fa6ac" />,
              },
              classNames: {
                rightSection: "pointer-events-none",
              },
            },
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <ToastContainer
          position="top-center"
          transition={Slide}
          hideProgressBar
          autoClose={4000}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </QueryClientProvider>
  );
}
