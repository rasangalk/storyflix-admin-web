import React from "react";
import { useParams } from "react-router-dom";

function Episodes() {
  const { albumId } = useParams();
  return <h1>{albumId}</h1>;
}

export default Episodes;
