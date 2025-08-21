// Ei function ta POST request handle korbe
exports.postContact = (req, res) => {
  const { name, email, message } = req.body;

  // ✅ 1. Validate input (optional)
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  // ✅ 2. For now, console.log data (later you can save to DB or send email)
  console.log("Contact Form Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // ✅ 3. Send back success response
  res.status(200).json({ success: true, message: "Contact form submitted successfully!" });
};
