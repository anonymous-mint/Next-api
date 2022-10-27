import { comments } from "../../../data/comments";
const Comments = (req, res) => {
  if (req.method === "GET") res.status(200).json(comments);
  else {
    const { comment } = req.body;
    const newComment = {
      id: Date.now(),
      text: comment,
    };

    comments.push(newComment);
    res.status(200).json(newComment);
  }
};

export default Comments;
