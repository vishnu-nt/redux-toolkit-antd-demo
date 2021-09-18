import { useEffect } from "react";
import { Avatar, Drawer, List, Skeleton, Tag } from "antd";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Comment from "../../components/Comment";
import CommentEditor from "../../components/Comment/CommentEditor";
import { postComment, fetchCommentsByPostId } from "./commentsAPI";
import { addComment, setComments } from "./commentSlice";

import type { Post, Comment as IComment } from "../../types";

const PostContainer = styled.div`
  margin: 1em 0;
`;

interface IProps {
  post?: Post;
  hideComments: () => void;
}

const CommentsDrawer = (props: IProps) => {
  const { commentMap, status } = useAppSelector((state) => ({
    commentMap: state.comments.comments,
    status: state.comments.status,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.post?.id) {
      fetchCommentsByPostId(props.post?.id).then((postComments) =>
        dispatch(
          setComments({ comments: postComments, postId: props.post!.id })
        )
      );
    }
  }, [props.post, dispatch]);

  const onClose = () => {
    props.hideComments();
  };

  const addOrupdateComment = (comment: IComment) =>
    postComment(comment).then(() => {
      dispatch(addComment({ comment, postId: props.post!.id }));
    });

  const handleNewComment = (comment: string, tags?: string[]) => {
    const newComment: IComment = {
      postId: props.post!.id,
      id: Date.now(),
      body: comment,
      name: "You",
      tags,
    };
    return addOrupdateComment(newComment);
  };

  const renderComments = (comments: IComment[], enableReply?: boolean) =>
    comments.map((comment, i) => (
    <Comment
      key={i}
      comment={comment}
      onReply={addOrupdateComment}
      enableReply={enableReply}
    >
      {comment.replies
        ? renderComments(comment.replies)
        : null}
        {comment.tags?.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </Comment>
  ));

  const renderContent = () => {
    if (status === "loading") {
      return (
        <>
          {Array(2)
            .fill(true)
            .map((_, i) => (
              <Skeleton key={i} active avatar paragraph={{ rows: 4 }} />
            ))}
        </>
      );
    }
    if (props.post?.id) {
      const postComments = commentMap[props.post!.id] || [];
      return renderComments(postComments, true);
    }
  };

  return (
    <Drawer
      title="Comments"
      placement="right"
      width={736}
      onClose={onClose}
      visible={Boolean(props.post)}
    >
      <List.Item.Meta
        avatar={<Avatar>{props.post?.id}</Avatar>}
        title={props.post?.title}
      />
      <PostContainer>{props.post?.body}</PostContainer>
      <div>
        <CommentEditor onSubmit={handleNewComment} />
        {renderContent()}
      </div>
    </Drawer>
  );
};

export default CommentsDrawer;
