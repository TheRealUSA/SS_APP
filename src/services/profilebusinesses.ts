import axios from "axios";
// import Profile from "../models/Profile-e/profile";
import api from "../api/config"


export const getAllProfileBusinesses = async () => {
  try {
    const response = await api.get('/api/v1/profile-businesses');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfileBusinessById = async (id) => {
  try {
    const response = await api.get(`/api/v1/profile-businesses/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getById = async (id: string | undefined): Promise<Profile> => {
//     const result = await api.get(`/${key}/${id}`)
//     return result.data
//   }
  

export const createProfileBusiness = async (profileBusinessData) => {
  try {
    const response = await api.post('/api/v1/profile-businesses', profileBusinessData);
    return response.data;
  } catch (error) {
    throw error;
  }
};






