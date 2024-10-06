interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = async (data: FormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      console.log(result); // Log the server response
      console.log("Message sent successfully!");
    } else {
      console.error("Error from server:", result.error); // Log server error
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Request failed:", error); // Log client-side error
    alert("Something went wrong. Please try again later.");
  }
};

export default ContactForm;
