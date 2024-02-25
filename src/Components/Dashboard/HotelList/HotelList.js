// // import React from "react";
// // import HotelCard from "./HotelCard";

// // const HotelList = () => {
// //   const hotels = [
// //     {
// //       id: 1,
// //       name: "Hotel A",
// //       description: "Description of Hotel A",
// //       price: 100,
// //       image: "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Hotel+A",
// //     },
// //     {
// //       id: 2,
// //       name: "Hotel B",
// //       description: "Description of Hotel B",
// //       price: 120,
// //       image: "https://via.placeholder.com/400x200/33FF86/FFFFFF?text=Hotel+B",
// //     },
// //     {
// //       id: 3,
// //       name: "Hotel C",
// //       description: "Description of Hotel C",
// //       price: 150,
// //       image: "https://via.placeholder.com/400x200/337EFF/FFFFFF?text=Hotel+C",
// //     },
// //   ];

// //   return (
// //     <div>
// //       {hotels.map((hotel) => (
// //         <HotelCard
// //           key={hotel.id}
// //           name={hotel.name}
// //           description={hotel.description}
// //           price={hotel.price}
// //           image={hotel.image}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default HotelList;

// // import React from "react";
// // import HotelCard from "./HotelCard";
// // import "./HotelList.css"; // Custom CSS for styling the hotel list

// // const HotelList = () => {
// //   const hotels = [
// //     {
// //       id: 1,
// //       name: "Hotel A",
// //       address: "Description of Hotel A",
// //       rating: 100,
// //       image: "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Hotel+A",
// //     },
// //     {
// //       id: 2,
// //       name: "Hotel B",
// //       address: "Description of Hotel B",
// //       rating: 120,
// //       image: "https://via.placeholder.com/400x200/33FF86/FFFFFF?text=Hotel+B",
// //     },
// //     {
// //       id: 3,
// //       name: "Hotel C",
// //       address: "Description of Hotel C",
// //       rating: 150,
// //       image: "https://via.placeholder.com/400x200/337EFF/FFFFFF?text=Hotel+C",
// //     },
// //   ];

// //   return (
// //     <div className="hotel-list">
// //       {hotels.map((hotel) => (
// //         <HotelCard
// //           key={hotel.id}
// //           name={hotel.name}
// //           address={hotel.address}
// //           rating={hotel.rating}
// //           image={hotel.image}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default HotelList;

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import HotelCard from "./HotelCard";
// import "./HotelList.css"; // Custom CSS for styling the hotel list

// const HotelList = (user) => {
//   console.log(user, "check &&&&&&&&&&&&&&&&&&&&&&&&&");
//   const hotels = [
//     {
//       id: 1,
//       name: "Hotel A",
//       address: "Description of Hotel A",
//       rating: 100,
//       image: "https://via.placeholder.com/400x200/FF5733/FFFFFF?text=Hotel+A",
//     },
//     {
//       id: 2,
//       name: "Hotel B",
//       address: "Description of Hotel B",
//       rating: 120,
//       image: "https://via.placeholder.com/400x200/33FF86/FFFFFF?text=Hotel+B",
//     },
//     {
//       id: 3,
//       name: "Hotel C",
//       address: "Description of Hotel C",
//       rating: 150,
//       image: "https://via.placeholder.com/400x200/337EFF/FFFFFF?text=Hotel+C",
//     },
//   ];

//   return (
//     <div className="hotel-list">
//       {hotels.map((hotel) => (
//         <div key={hotel.id} className="hotel-card">
//           <HotelCard
//             name={hotel.name}
//             address={hotel.address}
//             rating={hotel.rating}
//             image={hotel.image}
//             id={hotel.id}
//             user={user}
//           />
//           {/* <div className="button-container">
//             <Link to={`/hotels/${hotel.id}`} className="edit-button">
//               Edit hotel
//             </Link>
//             <button className="delete-button">Delete</button>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HotelList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import HotelCard from "./HotelCard";
// import axios from "axios"; // Import axios for making HTTP requests
// import "./HotelList.css"; // Custom CSS for styling the hotel list

// const HotelList = ({ user }) => {
//   // State to store the fetched hotels
//   const [hotels, setHotels] = useState([]);

//   // Function to fetch hotels from the API
//   const fetchHotels = async () => {
//     try {
//       // Make GET request to fetch hotels from the API
//       const response = await axios.get("/hotels");
//       console.log(
//         response.data.map((item) => item._id),
//         "response."
//       );
//       // Set the fetched hotels in state
//       setHotels(response.data);
//     } catch (error) {
//       console.error("Error fetching hotels:", error);
//     }
//   };

//   // Fetch hotels when the component mounts
//   useEffect(() => {
//     fetchHotels();
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <div className="hotel-list">
//       {hotels.map((hotel) => (
//         <div key={hotel.id} className="hotel-card">
//           <HotelCard
//             name={hotel.name}
//             address={hotel.address}
//             rating={hotel.rating}
//             image={hotel.image}
//             id={hotel.id}
//             user={user}
//           />
//           {/* <div className="button-container">
//             <Link to={`/hotels/${hotel.id}`} className="edit-button">
//               Edit hotel
//             </Link>
//             <button className="delete-button">Delete</button>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HotelList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelCard from "./HotelCard";
import "./HotelList.css"; // Custom CSS for styling the hotel list

const HotelList = ({ user }) => {
  const [hotels, setHotels] = useState([]);

  // Function to fetch hotels from the API
  const fetchHotels = async () => {
    try {
      const response = await axios.get("/hotels");
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  // Fetch hotels when the component mounts
  useEffect(() => {
    fetchHotels();
  }, []);

  // Function to handle deletion of a hotel
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/hotels/${id}`);
      // After successful deletion, fetch updated list of hotels
      fetchHotels();
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
          {console.log(hotel, "check")}
          <HotelCard
            name={hotel.name}
            address={hotel.address}
            rating={hotel.rating}
            image={hotel.imageUrl}
            id={hotel._id}
            user={user}
            onDelete={() => handleDelete(hotel._id)} // Pass the delete function
          />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
