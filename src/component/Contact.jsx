import React, { useState, useCallback } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = useCallback(() => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Full name is required";
    if (!email.trim()) formErrors.email = "Email is required";
    if (!message.trim()) formErrors.message = "Message is required";
    return formErrors;
  }, [name, email, message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);

    const formErrors = validateForm();
    setErrors(formErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "bf4995b5-2ec0-4ac3-858e-078f6178a724",
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        setSuccessMessage("Failed to send message. Try again later.");
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-background text-foreground p-8 text-white h-full w-full">
      <div className="h-[10%] md:h-[5%] w-full text-transparent">.</div>
      <div className="main-content h-[90%] md:h-[95%] w-full">
        <h1 className="text-4xl font-extrabold mb-3">Contact</h1>
        <div className="bg-gradient-to-br from-secondary to-accent h-[100%] rounded-xl relative w-full">
          <div className="h-full w-full flex justify-center">
            <form className="w-full flex flex-col pt-16" onSubmit={handleSubmit}>
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
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-2 w-full p-2">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  className="w-full p-4 bg-input text-foreground rounded-xl border border-border bg-transparent outline-none input"
                ></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}
              </div>
              <div className="text-right p-2 w-full">
                <button
                  type="submit"
                  className="bg-[#282829] p-4 rounded-xl flex items-center transition-all duration-300 shadow-md backdrop-blur-lg shadow-slate-800"
                >
                  Send Message ✈️
                </button>
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
