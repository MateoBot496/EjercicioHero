import { Route, Routes } from "react-router-dom";
import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";

import DefaultLayout from "./layouts/default";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import Post from "@/pages/Post";

const modules = [AllCommunityModule];

function App() {
  return (
    <AgGridProvider modules={modules}>
      <DefaultLayout>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<DocsPage />} path="/docs" />
          <Route element={<PricingPage />} path="/pricing" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<Post />} path="/posts/:id" />
        </Routes>
      </DefaultLayout>
    </AgGridProvider>
  );
}

export default App;
