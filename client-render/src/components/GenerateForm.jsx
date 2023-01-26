import React from 'react';

function GenerateForm({ generate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    generate();
  }
  return (
    <form onSubmit={handleSubmit}>
      <button class="glow-button" type="submit">Generate</button>
    </form>
  );
}

export default GenerateForm;