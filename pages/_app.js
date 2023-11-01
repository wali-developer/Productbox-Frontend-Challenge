import RootLayout from "@/components/layout";
import { ContextProvider } from "@/context/globalContext";
import { poppins } from "@/styles/fonts";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${poppins.className}`}>
        <ContextProvider>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ContextProvider>
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          className: "text-sm",
          duration: 5000,
        }}
      />
    </>
  );
}
