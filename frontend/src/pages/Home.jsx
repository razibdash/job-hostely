import { useState } from "react";
import Banner from "../components/Banner/Banner";

function Home() {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="">
      <Banner query={query} handleChange={handleChange} />
    </div>
  );
}

export default Home;
