import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import '../styles/CardDetails.scss';

function CardDetails() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  //url to be moved to a diff file
  const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';



  //make api call to fetch card details
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCardData(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [])


  return (

    loading ? (<div data-testid="loading">...loading</div>) :
      <div className="container">
        <div className="u-equal-height">
          {cardData.map((item) => {
            return (
              <Card data-testid="cardContainer" key={item.id} cardData={item} />
            )
          })}
        </div>
      </div>
  );
}

export default CardDetails;
