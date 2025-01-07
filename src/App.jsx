import { useState } from "react";
import Work from "./Work";
import Contact from "./Contact";
import About from "./About";

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <>
      <main className="container antialiased px-12">
        <nav className="space-x-8 py-16">
          <button
            className={`px-4 py-2 rounded-md hover:bg-emerald-200/10 hover:text-emerald-400 ${
              activeTab === "work" ? "bg-emerald-200/10 text-emerald-400" : ""
            }`}
            onClick={() => setActiveTab("work")}
          >
            work
          </button>
          <button
            className={`px-4 py-2 rounded-md hover:bg-emerald-200/10 hover:text-emerald-400 ${
              activeTab === "contact"
                ? "bg-emerald-200/10 text-emerald-400"
                : ""
            }`}
            onClick={() => setActiveTab("contact")}
          >
            contact
          </button>
          <button
            className={`px-4 py-2 rounded-md hover:bg-emerald-200/10 hover:text-emerald-400 ${
              activeTab === "about" ? "bg-emerald-200/10 text-emerald-400" : ""
            }`}
            onClick={() => setActiveTab("about")}
          >
            about
          </button>
        </nav>
        {activeTab === "work" && <Work />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "about" && <About />}
      </main>
    </>
  );
}

// Get the current year
// const year = new Date().getFullYear();
