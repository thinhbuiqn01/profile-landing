import NavigationBar from "@/components/navbar";
import React from "react";
import LayoutContainer from "./container";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LayoutContainer className="flex justify-center sticky top-0 bg-white z-50 border-b ">
        <NavigationBar />
      </LayoutContainer>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
export default Layout;
