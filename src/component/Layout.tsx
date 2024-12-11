import Header from "../component/Header";
import Footer from "../component/Footer";
import { ReactNode } from "react";

function Token({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Token;
