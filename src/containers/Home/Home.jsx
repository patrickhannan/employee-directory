import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Table from "../../components/Table/Table";

const Home = () => {
    return (
      <>
        <Jumbotron />
        <div className="container">
              <Table />
        </div>
      </>
    );
  };
  export default Home;