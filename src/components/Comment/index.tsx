import { Comment, Avatar } from "antd";
import { ReactNode, useState } from "react";
import CommentEditor from "./CommentEditor";
import { getNameInitials } from "../../utils/name";

import type { Comment as IComment, CommentReply } from "../../types";

interface IProps {
  children?: ReactNode;
  comment: IComment;
  onReply: (updatedComment: IComment) => Promise<void>;
  enableReply?: boolean; // To limit replies to one level depth
}

const AppComment = ({ children, comment, onReply, enableReply }: IProps) => {
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  const handleCommentReply = (reply: string, tags?: string[]) => {
    const newReply: CommentReply = {
      postId: comment.postId,
      id: Date.now(),
      name: 'You',
      body: reply,
      tags: tags,
      commentId: comment.id,
    };
    const updatedComment: IComment = {
      ...comment,
      replies: [
        newReply,
        ...(comment.replies || []),
      ]
    };
    return onReply(updatedComment);
  };
  return (
    <>
      <Comment
        actions={enableReply ? [
          <span
            role="button"
            onClick={() => setIsEditorVisible(true)}
            key="comment-nested-reply-to"
          >
            Reply
          </span>,
        ]: undefined}
        author={comment.name}
        avatar={<Avatar>{getNameInitials(comment.name)}</Avatar>}
        content={<p>{comment.body}</p>}
      >
        {children}
      {isEditorVisible && <CommentEditor onSubmit={handleCommentReply} />}
      </Comment>
    </>
  );
};

export default AppComment;
