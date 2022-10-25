const handler  = (req, res) => {
  res.status(200).json({ message: "success recent blog" });
};

export default handler;