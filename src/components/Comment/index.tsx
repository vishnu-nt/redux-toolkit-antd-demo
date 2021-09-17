import { Comment, Avatar } from "antd";
import { ReactNode, useState } from "react";
import CommentEditor from "./CommentEditor";
import { getNameInitials } from "../../utils/name";

import type { Comment as IComment } from "../../types";

interface IProps {
  children?: ReactNode;
  comment: IComment;
}

const AppComment = ({ children, comment }: IProps) => {
  const [isEditorVisible, setIsEditorVisible] = useState(false);
  return (
    <>
      <Comment
        actions={[
          <span
            role="button"
            onClick={() => setIsEditorVisible(true)}
            key="comment-nested-reply-to"
          >
            Reply
          </span>,
        ]}
        author={comment.name}
        avatar={<Avatar>{getNameInitials(comment.name)}</Avatar>}
        content={<p>{comment.body}</p>}
      >
        {children}
      {isEditorVisible && <CommentEditor />}
      </Comment>
    </>
  );
};

export default AppComment;
