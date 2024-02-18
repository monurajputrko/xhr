import {useState} from "react";

export default function NewPostForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = event => {
      event.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => {
        if (xhr.status === 201) {
          setSuccess(true);
          setTitle('');
          setBody('');
        } else {
          console.error('Failed to add post');
        }
      };
      xhr.onerror = () => {
        console.error('Failed to add post');
      };
      xhr.send(JSON.stringify({ title, body }));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add New Post</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="inputField" 
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            className="inputField" 
          />
        </div>
        <button type="submit" className="submitButton">Submit</button> 
        {success && <div className="successMessage">Post added successfully!</div>} 
      </form>
    );
  }