import { useState, useEffect } from "react";
import Carousel from "../components/Home/Carousel";
import Book from "../components/Home/DesignBookStyle";
import Loader from "../components/Loader/Loader";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Loader loading={loading} />
      <Carousel />
      <Book />
    </div>
  );
}

export default Home;
