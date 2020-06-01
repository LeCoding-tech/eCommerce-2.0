import React from "react";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Filter from '../Filter/Filters'

class Backpacks extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Filter />
        <Footer />
      </div>
    );
  }
}

export default Backpacks;