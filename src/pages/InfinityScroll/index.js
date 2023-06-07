import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "../../components/Header/Header";

import axios from "axios";

import "./InfinityScroll.scss"

const InfiniteScroll = () => {
  const [passengers, setPassengers] = useState([]);
  const [page, setPage] = useState(0);

  const options = {
    threshold:1,
  };
  const [ref, inView ,entry] = useInView(options);

  const fetch = async (page) => {
    try {
        const { data } = await axios.get(
          `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
        );
        const fetchedPassengers = data.data;
        setPassengers((prevState) => [...prevState, ...fetchedPassengers]);
    } catch (error) {
        alert(JSON.stringify(error))
    }
  };

  useEffect(() => {
    fetch(page);
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <div>
      <Header isVisible={inView}  threshold={entry && entry.intersectionRatio *100}/>

      {passengers &&
        passengers.map((passenger, idx) => {
          const lastElement = idx === passengers.length - 1;
          return (
            <div
              key={idx}
              className={"card"}
              ref={lastElement ? ref : null}
            >
              <h2>{passenger.name}</h2>
              <h3>{passenger.trips}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default InfiniteScroll;