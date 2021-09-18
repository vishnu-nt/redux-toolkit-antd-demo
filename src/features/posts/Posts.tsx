import { useEffect, useState } from 'react';
import { Avatar, List, Skeleton } from 'antd';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CommentsDrawer from '../comments/CommentsDrawer';

import type { Post } from "../../types";
import { fetchUsers } from '../users/usersAPI';
import { setUsers } from '../users/usersSlice';
import { fetchPosts } from './postsAPI';
import { setPosts } from './postsSlice';
import { getNameInitials } from '../../utils/name';

const ListItem = styled(List.Item)`
  background-color: #ffffff;
  margin-bottom: 16px;
`;

const ListItemContent = styled.span`
  cursor: pointer;
`;

const Feeds = () => {
  const [selectedPost, setSelectedPost] = useState<Post>();
  const { posts, status, userMap } = useAppSelector(state => ({
    posts: state.posts.posts,
    status: state.posts.status,
    userMap: state.users,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([
      fetchPosts(),
      fetchUsers(),
    ])
    .then(([newPosts, users]) => {
      dispatch(setPosts(newPosts));
      dispatch(setUsers(users));
    });
  }, [dispatch]);

  const isLoading = status === 'loading';

  if (isLoading) {
    return (
      <>
        {Array(2).fill(true).map((_, i) =>
          <Skeleton key={i} active avatar paragraph={{ rows: 4 }} />)}
      </>);
  }

  const renderListItem = (post: Post) => {
    const user = userMap[post.userId];
    return (
      <ListItem
        key={post.title}
        actions={[<ListItemContent role="button">view comments {'>'}</ListItemContent>]}
        onClick={() => setSelectedPost(post)}
      >
        <List.Item.Meta
          avatar={<Avatar>{getNameInitials(user?.name)}</Avatar>}
          title={post.title}
          description={user?.username}
        />
        <ListItemContent>
          {post.body}
        </ListItemContent>
      </ListItem>
    );
  }

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={posts}
        renderItem={(post) => renderListItem(post)}
      />
      <CommentsDrawer
        post={selectedPost}
        hideComments={() => setSelectedPost(undefined)}
      />
    </>
  );
};

export default Feeds;
