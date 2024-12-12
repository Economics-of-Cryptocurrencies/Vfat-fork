import Header from "../component/Header";
import Footer from "../component/Footer";
import { ReactNode } from "react";

interface LayoutProp {
  headerStatus: number;
  children: ReactNode;
}

function Layout(props: LayoutProp) {
  return (
    <div>
      <Header active={props.headerStatus} />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
