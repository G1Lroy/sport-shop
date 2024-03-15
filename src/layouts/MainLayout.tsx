import { ReactNode } from "react";
import AppHeader from "../blocks/AppHeader";
import AppFooter from "../blocks/AppFooter";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <AppHeader />
      <main className="main-content">{children}</main>
      <AppFooter />
    </>
  );
};

export default MainLayout;
