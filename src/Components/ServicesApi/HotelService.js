// // HotelService.js
// const BASE_URL = "http://localhost:5000/api/hotels";

// export const getHotels = async () => {
//   const response = await fetch(BASE_URL);
//   return response.json();
// };

// export const getHotelById = async (id) => {
//   const response = await fetch(`${BASE_URL}/${id}`);
//   return response.json();
// };

// // Implement other CRUD operations (create, update, delete) similarly

// HotelService.js

const BASE_URL = "your_backend_url/api/hotels";

export const getHotels = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch hotels");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getHotelById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch hotel");
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createHotel = async (hotelData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hotelData),
    });

    if (!response.ok) {
      throw new Error("Failed to create hotel");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateHotel = async (id, hotelData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hotelData),
    });

    if (!response.ok) {
      throw new Error("Failed to update hotel");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteHotel = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete hotel");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
