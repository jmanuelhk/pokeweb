
import { Inter } from "next/font/google";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import App from "./app";

const inter = Inter({ subsets: ["latin"] });




export default function Home() {
  return (
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  );
}
