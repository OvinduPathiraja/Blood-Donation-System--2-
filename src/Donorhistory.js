import React from "react";
import Table from "./Table";
import Navigation from "./Navigation";

function Donorhistory() {
  return (
    <div>
      <Navigation userType="donor"/>
      <Table tableName="DONOR HISTORY" />
    </div>
  );
}
export default Donorhistory;
