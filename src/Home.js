import React from "react";
import Navbar from "./component/Navbar";

import Footer from "./component/footer";
import Caro from "./component/caro";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Caro />
      <Footer />
    </div>
  );
}
export default Home;
