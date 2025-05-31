import axios from "axios";

export const sendToBackend = async (message) => {
  try {
    const response = await axios.post("http://localhost:5000/noteai", { message });

    if (response.data && response.data.reply) {
      return response.data.reply;
    } else {
      console.error("Invalid Responce Format:")
      return "Please connect to internet";
    }
  } catch (error) {
    console.error("Error communicating with backend:", error);
    return "Sorry, something went wrong.";
  }
};

export default sendToBackend;
