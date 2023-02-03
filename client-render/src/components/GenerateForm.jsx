import React from 'react';

function GenerateForm({ generate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    generate();
  }
  return (
    <form onSubmit={handleSubmit}>
      <button className="glow-button" type="submit">Generate</button>
    </form>
  );
}

export default GenerateForm;