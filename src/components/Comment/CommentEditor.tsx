import { Comment, Avatar, Form, Button, Input } from 'antd';
import { ChangeEvent, useState } from 'react';

const { TextArea } = Input;

const CommentEditor = () => {
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!comment) {
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setComment('');
      // this.setState({
      //   submitting: false,
      //   value: '',
      //   comments: [
      //     ...this.state.comments,
      //     {
      //       author: 'Han Solo',
      //       avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      //       content: <p>{this.state.value}</p>,
      //       datetime: moment().fromNow(),
      //     },
      //   ],
      // });
    }, 1000);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const editor = (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={handleChange} value={comment} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={handleSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
  
  return (
    <Comment
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={editor}
    />
  )
}

export default CommentEditor
