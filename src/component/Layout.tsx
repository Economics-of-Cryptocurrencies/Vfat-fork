import { useState, createContext, useContext } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { ReactNode } from "react";

interface LayoutProp {
  headerStatus: number;
  children: ReactNode;
}

interface WalletContext {
  walletStatus: boolean;
  setWalletStatus: Function;
}

const WalletContext = createContext<WalletContext>({
  walletStatus: false,
  setWalletStatus: () => {},
});

const useWallet = () => {
  return useContext(WalletContext);
};

function Layout(props: LayoutProp) {
  const [walletStatus, setWalletStatus] = useState(false);

  return (
    <WalletContext.Provider value={{ walletStatus, setWalletStatus }}>
      <Header active={props.headerStatus} />
      <div>{props.children}</div>
      <Footer />
    </WalletContext.Provider>
  );
}

export default Layout;

export { useWallet };
