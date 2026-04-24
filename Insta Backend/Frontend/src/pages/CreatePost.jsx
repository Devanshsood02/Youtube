import React, { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router";

const CreatePost = () => {
   const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        // console.log(res);
        navigate("/feed")
     
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <textarea
          type="text"
          name="caption"
          required
          placeholder="Enter Caption"
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
