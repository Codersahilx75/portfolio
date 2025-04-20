// src/apis/contact/sendMessage.js
import API_BASE_URL from '../../config/apiConfig';

const sendMessage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false };
  }
};

export default sendMessage;
