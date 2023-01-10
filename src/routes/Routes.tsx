import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home.tsx/Home";
import Men from "./men/Men";
import Women from "./women/Women";
import Login from "./login/Login";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Favorites from "./favorites/Favorites";
import Details from "./details/details";
import SearchResults from "./search-results/SearchResults";
import Bag from "./bag/Bag";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/women"
          element={
            <ProtectedRoute>
              <Women />
            </ProtectedRoute>
          }
        />
        <Route
          path="/men"
          element={
            <ProtectedRoute>
              <Men />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchResults />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bag"
          element={
            <ProtectedRoute>
              <Bag />
            </ProtectedRoute>
          }
        />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
