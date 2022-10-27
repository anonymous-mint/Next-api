import { comments } from "../../../data/comments";

const deleteComment = (req, res) => {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  console.log(comments);
  const idx = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  comments.splice(idx, 1);
  console.log(idx);
  res.status(200).json(comment);
};

export default deleteComment;
