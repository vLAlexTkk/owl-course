import { ReactNode } from "react";

import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";

type Props = {
  children?: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex min-h-screen flex-col bg-white-100 font-primary text-16 font-normal text-black">
      <header>
        <Header />
      </header>
      <main className="flex flex-row gap-4">{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </section>
  );
};
