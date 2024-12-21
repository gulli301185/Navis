import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../layout/Layout";
import AllNews from "../pages/AllNews";
import NewsDetail from "../pages/NewsDetail";
import { PersonalAuth } from "../shared/auth/PersonalAuth";
import { Registration } from "../shared/auth/Registration";
import Protectedervice from "../pages/Protectedervice";
import ServiceCard from "../entities/serviceCard/ServiceCard";
import Client from "../entities/client/Client";
import Analize from "../pages/Analize";
import Price from "../pages/Price";
import Profile from "../pages/Profile";
import { HelpInfo } from "../pages/HelpInfo";
import TariffPage from "../pages/TariffPage";
import Integration from "../pages/Integration";
import ComplaneDetails from "../pages/ComplaneDetails";
import CheckingComplanePage from "../pages/CheckingComplanePage";
import CheckingPage from "../pages/CheckingPage";
import { CheckResult } from "../entities/checking/CheckResult";
import SecondHeader from "../shared/header/SecondHeader";
import PopularQuestion from "../entities/questions/PopularQuestion";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    children: [
      { element: <Home />, path: "/" },
      { element: <About />, path: "about" },
      { element: <AllNews />, path: "allNews" },
      { element: <NewsDetail />, path: "news/:id" },
      { element: <Protectedervice />, path: "protectedService" },
      { element: <ServiceCard />, path: "service" },
      { element: <Client />, path: "partner" },
      { element: <Analize />, path: "analize" },
      { element: <Price />, path: "price" },
      { element: <Profile />, path: "profile" },
      { element: <HelpInfo />, path: "help" },
      { element: <TariffPage />, path: "tariff" },
      { element: <Integration />, path: "integration" },
      { element: <PopularQuestion />, path: "question" },
      // { element: <CheckingComplanePage />, path: "checking" },
      { element: <ComplaneDetails />, path: "checkDetail" },
      { element: <CheckResult />, path: "result" },
      {
        element: <SecondHeader />,
        path: "secondHeader",
        children: [
          { index: true, element: <CheckingPage /> },
          { element: <Profile />, path: "profile" },
          { element: <HelpInfo />, path: "help" },
          { element: <TariffPage />, path: "tariff" },
          { element: <Integration />, path: "integration" },
          { element: <CheckingPage />, path: "check" },
          { element: <ComplaneDetails />, path: "checkDetail" },
        ],
      },
    ],
  },

  { element: <PersonalAuth />, path: "personal" },
  { element: <Registration />, path: "register" },
]);
