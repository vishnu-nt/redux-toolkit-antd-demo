import { Comment, Avatar, Form, Button, Input, Select } from 'antd';
import { ChangeEvent, useState } from 'react';

const { TextArea } = Input;

const TAGS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

interface Props {
  onSubmit: (comment: string, tags?: string[]) => Promise<void>,
}

const CommentEditor = (props: Props) => {
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!comment) {
      return;
    }
    setSubmitting(true);
    props.onSubmit(comment, selectedTags).then(() => {
      setSubmitting(false);
      setComment('');
      setSelectedTags([]);
    })
    .catch((err) => {
      console.error(err);
      setSubmitting(false);
    })
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const filteredOptions = TAGS.filter(o => !selectedTags.includes(o));

  const editor = (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={handleChange} value={comment} />
      </Form.Item>
      <Form.Item>
        <Select
          mode="tags"
          placeholder="Consider adding tags to the comment"
          value={selectedTags}
          onChange={tags => setSelectedTags(tags)}
          style={{ width: '100%' }}
          tokenSeparators={[',']}
        >
          {filteredOptions.map(item => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
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
