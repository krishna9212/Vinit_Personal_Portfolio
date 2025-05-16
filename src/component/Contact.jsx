import React, { useCallback, useState } from "react";
import { db } from "./../firebase"; // Ensure correct path to firebase.js
import { collection, addDoc } from "firebase/firestore";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Function to validate form fields
  const validateForm = useCallback(() => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Full name is required";
    if (!email.trim()) formErrors.email = "Email is required";
    if (!message.trim()) formErrors.message = "Message is required";
    return formErrors;
  }, [name, email, message]);

  // Update errors whenever name, email, or message changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);

    // Validate form on every change
    const formErrors = validateForm();
    setErrors(formErrors);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      // Add document to Firestore collection
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      // Clear form fields and messages on successful submission
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setSuccessMessage("Message sent successfully!");
      console.log("Document written with ID: ", docRef.id); // Log the document ID for verification
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="bg-background text-foreground p-8 text-white h-full w-full">
      <div className="h-[10%] md:h-[5%] w-full text-transparent">.</div>
      <div className="main-content h-[90%] md:h-[95%] w-full ">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold mb-3">Contact</h1>

        {/* Contact Form Section */}
        <div className="bg-gradient-to-br from-secondary to-accent h-[100%] rounded-xl relative w-full">
          <div className=" h-full w-full  flex  justify-center">
            {/* Form with onSubmit handler */}
            <form
              className="w-full flex flex-col   pt-16 "
              onSubmit={handleSubmit}
            >
              {/* Name and Email Input Fields */}
              <div className="flex w-full gap-6 mb-1 p-2">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="w-full p-4 input"
                  />
                  {/* Error message for name field */}
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full p-4 input rounded-xl border border-border"
                  />
                  {/* Error message for email field */}
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              {/* Message Textarea */}
              <div className="mb-2 w-full p-2">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  className="w-full p-4 bg-input text-foreground rounded-xl border border-border bg-transparent outline-none input"
                ></textarea>
                {/* Error message for message field */}
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              {/* Submit Button */}
              <div className="text-right p-2 w-full">
                <button
                  type="submit"
                  className="bg-[#282829] p-4 rounded-xl flex items-center transition-all duration-300 shadow-md backdrop-blur-lg shadow-slate-800"
                >
                  Send Message ✈️
                </button>
                {/* Success message displayed after form submission */}
                {successMessage && (
                  <p className="text-green-500 mt-4">{successMessage}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
