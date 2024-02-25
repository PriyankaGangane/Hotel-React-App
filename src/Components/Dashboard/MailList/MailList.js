// import React from "react";
// import "./mailList.css"; // Import CSS for styling the mail list

// const MailList = () => {
//   return (
//     <div className="mail">
//       <h1 className="mailTitle">Save time, save money!</h1>
//       <span className="mailDesc">
//         Sign up and we'll send the best deals to you
//       </span>
//       <div className="mailInputContainer">
//         <input type="text" placeholder="Your Email" className="mailInput" />
//         <button className="mailButton">Subscribe</button>
//       </div>
//     </div>
//   );
// };

// export default MailList;

import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
