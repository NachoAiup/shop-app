import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home.tsx/Home";
import Men from "./men";
import Women from "./women";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
