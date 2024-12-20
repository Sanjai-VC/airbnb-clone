import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const login = (credentials) => API.post("/auth/login", credentials);
export const register = (data) => API.post("/auth/register", data);
export const fetchProperties = () => API.get("/properties");
export const fetchPropertyDetails = (id) => API.get(`/properties/${id}`);
export const bookProperty = (bookingData) => API.post("/bookings", bookingData);
export const fetchMyBookings = () => API.get("/bookings/my");
