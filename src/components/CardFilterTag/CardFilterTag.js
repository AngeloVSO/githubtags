import React from "react";
import { Form } from "./style";

const CardFilterTag = ({ setInputSearch }) => {
  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const blockSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={blockSubmit}>
      <input
        required
        onChange={handleInputSearch}
        placeholder={"busque por tags cadastrada..."}
      />
    </Form>
  );
};

export default CardFilterTag;
