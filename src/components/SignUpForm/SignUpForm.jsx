import React, { useState } from 'react';
const initialValue = {
  name: '',
  email: '',
  password: '',
};
const SignUpForm = ({ onSubmit }) => {
  const [input, setInput] = useState(initialValue);
  const onInputChange = evt => {
    const { name, value } = evt.target;
    setInput(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        onSubmit(input);
        setInput(initialValue);
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        onChange={onInputChange}
        value={input.name}
        name="name"
        type="text"
        id="name"
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={onInputChange}
        value={input.email}
        name="email"
        type="email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={onInputChange}
        value={input.password}
        name="password"
        type="password"
        id="password"
      />
      <button type="submit">Sign up</button>
    </form>
  );
};
export default SignUpForm;
