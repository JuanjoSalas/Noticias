import React, { useEffect, useState } from 'react';
import "./Form.scss";
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const initialValue = {
    date: "",
    title: "",
    body: "",
    author: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!data.title) {
      setMessage("");
    } else if (data.title.length < 1) {
      setMessage("You must enter a Title");
      setBtnDisabled(true);
    } else if (data.body.length < 1) {
      setMessage("You must enter a body");
      setBtnDisabled(true);
    } else if (data.author.length < 1) {
      setMessage("You must enter a Author");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [data]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('Form', JSON.stringify(data))
    console.log(data);
    setData(initialValue);
    navigate("/list");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="date"
        name="date"
        id="date"
        placeholder="Insert date"
        onChange={handleInputChange}
        value={data.date}
      />
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Insert Title"
        onChange={handleInputChange}
        value={data.title}
      />
      <input
        type="text"
        name="body"
        id="body"
        placeholder="News"
        onChange={handleInputChange}
        value={data.body}
      />
       <input
        type="text"
        name="author"
        id="author"
        placeholder="Author"
        onChange={handleInputChange}
        value={data.author}
      />
      <input className="button" type="submit" value="Send" disabled={btnDisabled} />
      <p>{message}</p>
    </form>
  )
};

export default Form;