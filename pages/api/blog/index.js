const blogHandler  = (req, res) => {
  res.status(200).json({ message: "success blog" });
};

export default blogHandler;