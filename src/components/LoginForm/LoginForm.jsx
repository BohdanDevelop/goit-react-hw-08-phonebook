import React, { useState } from 'react';
const initialValue = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
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
      <button type="submit">Log in</button>
    </form>
  );
};
export default LoginForm;
