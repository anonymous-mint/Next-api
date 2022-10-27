import { comments } from "../../../data/comments";

const deleteComment = (req, res) => {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  res.status(200).json(comment);
};

export default deleteComment;
