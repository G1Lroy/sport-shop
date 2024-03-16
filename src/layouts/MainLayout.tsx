import { ReactNode } from "react";
import AppHeader from "../blocks/AppHeader";
import AppFooter from "../blocks/AppFooter";


type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout-wrapper">
      <AppHeader />
      <main className="main-content">{children}</main>
      <AppFooter />
    </div>
  );
};

export default MainLayout;
