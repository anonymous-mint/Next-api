const homeHandler  = (req, res) => {
  res.status(200).json({ message: "success" });
};

export default homeHandler;