// import React from "react";
// import Navbar from "./Navbar/Navbar";
// import Header from "./Header/Header";

// function HotelHomePage() {
//   return (
//     <>
//       <Navbar />
//       <Header
//         backgroundImage={"../../../public/images/hotel1.jpeg"}
//         title="hello"
//       />
//     </>
//   );
// }

// export default HotelHomePage;

import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import HotelList from "./HotelList/HotelList";
import RoomList from "./HotelList/RoomList";
import MailList from "./MailList/MailList";
import Footer from "./Footer/Footer";
import LoginPage from "../Authentication/LoginPage";

function HotelHomePage({ user }) {
  return (
    <>
      <Navbar user={user} />
      {/* {user ? <h1>Welcome, {user.name}</h1> : <LoginPage setUser={setUser} />} */}
      <Header
        backgroundImage={"/images/hotel1.jpeg"} // corrected path
        title="hello"
        user={user}
      />
      <HotelList user={user} />
      <h1 className="homeTitle">Best Hotels to View look</h1>
      <RoomList />
      <MailList />
      <Footer />
    </>
  );
}

export default HotelHomePage;
