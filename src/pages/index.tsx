import * as React from "react";
import GlobalSearch from "../components/GlobalSearch";
import SiteLogo from "../components/SiteLogo";
import ThemeToggle from "../components/ThemeToggle";
// markup
const IndexPage = () => {
  return (
    <section className="bg-yellow-50 w-screen h-screen">
      <header className="container mx-auto my-4 px-4 flex items-center justify-between">
        <SiteLogo />
        <div>
          <GlobalSearch />
          <ThemeToggle />
        </div>
      </header>
      <main className="containermx-auto px-4">
        <p>My Blog is not a Blog, is a digital garden.</p>
      </main>
    </section>
  );
};

export default IndexPage;
