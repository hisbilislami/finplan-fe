import "@/styles/globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { Quicksand } from "@next/font/google";
import { Sidebar } from "../components/shared/sidebar";
import { Navbar } from "../components/shared/navbar";
import { useState } from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <main className={`${quicksand.variable} font-sans flex`}>
          <Sidebar open={open} setOpen={setOpen} />
          <div className={`${open ? "w-4/5" : "w-full"}`}>
            <Navbar />

            <div className="bill-wrapper">
              <div className="bill-container container w-full">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn afterSignInUrl={"/?logged_in=true"} />
      </SignedOut>
    </ClerkProvider>
  );
}
