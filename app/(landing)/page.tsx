import React from "react";
import { Metadata } from "next";
import LandingPage from "./landing";

const IndexPage = () => {
 return (
  <div>
    <LandingPage />
  </div>
 )
}
export const metadata: Metadata =  {
  title: "BM DAO"
}
export default IndexPage;
