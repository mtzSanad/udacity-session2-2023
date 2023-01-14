import React, { useEffect, useState } from 'react';

const UseEffectSample = () => {
  const [txt, setTxt] = useState('');

  useEffect(() => {
    (async () => {})();
    const timer = setTimeout(() => {
      console.log('Inside Side Effect');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [txt]);

  const updateTxt = (e) => {
    setTxt(e.target.value);
    // console.log(e.target.value);
  };
  //   console.log('Before Component Render');
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Empty Text"
          value={txt}
          onChange={updateTxt}
        />
      </form>
    </>
  );
};

export default UseEffectSample;
