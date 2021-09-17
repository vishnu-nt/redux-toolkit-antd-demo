import { List, Avatar } from "antd";
import { useState } from "react";
import styled from "styled-components";
import type { Post } from "../../types";
import CommentsDrawer from "../comments/CommentsDrawer";

const ListItem = styled(List.Item)`
  background-color: #ffffff;
  margin-bottom: 16px;
`;

const CommentButton = styled.span`
  cursor: pointer;
`;

const listData: Post[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    userId: i,
    id: i,
    title: `ant design part ${i}`,
    body: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const Feeds = () => {
  const [selectedPost, setSelectedPost] = useState<Post>();
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <ListItem
            key={item.title}
            actions={[<CommentButton role="button">view comments {'>'}</CommentButton>]}
            onClick={() => setSelectedPost(item)}
          >
            <List.Item.Meta
              avatar={<Avatar>{item.id}</Avatar>}
              title={item.title}
            />
            {item.body}
          </ListItem>
        )}
      />
      <CommentsDrawer
        post={selectedPost}
        hideComments={() => setSelectedPost(undefined)}
      />
    </div>
  );
};

export default Feeds;
