import Table from "../components/Table.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [id, setId] = useState();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setId(queryParams.get("id"));
  });
  return <Table id={id} />;
}
