import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../assets/data.json";

const Category = () => {
  const { id } = useParams();

  return <p>Hello</p>;
};

export default Category;
