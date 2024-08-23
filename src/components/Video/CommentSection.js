import React, { useState } from 'react';

const CommentSection = ({ initialComments }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Add the new comment to the list
      setComments([
        ...comments,
        { id: Date.now(), text: newComment }
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl font-bold mb-2">Comments</h2>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="4"
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Post Comment
        </button>
      </div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="bg-white p-2 rounded shadow-md mb-2">
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
