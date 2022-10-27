import { comments } from "../../../data/comments";
const Comments = (req, res) => {
  res.status(200).json(comments);
};

export default Comments;