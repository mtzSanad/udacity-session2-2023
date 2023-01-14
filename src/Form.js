import React, { useState } from 'react';

const Form = () => {
  const [txt, setTxt] = useState('');
  const [data, setData] = useState([]);
  const submit = (e) => {
    setData((prev) => {
      return [...prev, txt];
    });
    e.preventDefault();
    console.log(txt);
  };
  const updateTxt = (e) => {
    setTxt(e.target.value);
  };
  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Empty Text"
          value={txt}
          onChange={updateTxt}
        />
        <input type="submit" value="Submit Data" />
      </form>
      <hr />
      <p>{txt}</p>
      <ul>
        {data.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </>
  );
};

export default Form;
