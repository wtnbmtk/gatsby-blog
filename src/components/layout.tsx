import * as React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import "../styles/layout.css";

interface LayoutArgument {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutArgument) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
