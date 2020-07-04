import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/ui/Spinner";
import { useParams } from "react-router";

const Details = () => {
  const { name } = useParams();

  const [quote, setQuote] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote/random?author=${name}`
      );

      console.log(result.data[0].quote);
      setQuote(result.data[0].quote);
      setLoading(false);
    };

    fetchItems();
  }, [name]);

  return isLoading ? <Spinner /> : <div>{quote}</div>;
};

export default Details;
