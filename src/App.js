import React, { useState, useEffect } from 'react';
import './App.css'; 
import NewPostForm from './NewPostForm';
import PostList from './PostList';


function App() {
  return (
    <div className="appContainer"> 
      <PostList />
      <NewPostForm />
    </div>
  );
}

export default App;
