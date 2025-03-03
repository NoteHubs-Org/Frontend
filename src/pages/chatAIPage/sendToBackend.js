import axios from "axios";

export const sendToBackend = async (message) => {
  try {
    const response = await axios.post("http://localhost:5000/noteai", { message });

    console.log("Full Response from Backend:", response.data);

    if (response.data && response.data.reply) {
      return response.data.reply;
    } else {
      return "No valid response received from AI.";
    }
  } catch (error) {
    console.error("Error communicating with backend:", error);
    return "Sorry, something went wrong.";
  }
};

export default sendToBackend;
