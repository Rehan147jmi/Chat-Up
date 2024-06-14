import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while adding the User", error);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${URL}/user`);

    return response.data;
  } catch (error) {
    console.log("Error while calling getUser Api", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation Api", error.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${URL}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling setConversation Api", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage Api", error.message);
  }
};

export const getMessage = async (data) => {
  try {
    const response = await axios.post(`${URL}/message/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessage Api", error.message);
  }
};
