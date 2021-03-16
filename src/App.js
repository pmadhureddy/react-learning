import { useState } from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    popular_artists(size: 1) {
      artists {
        name
        artworks {
          id
          title
          is_for_sale
          price
          image {
            image_url
          }
        }
      }
    }
  }
`;

function App() {
  const [counter, setCounter] = useState(0);
  const { loading, data } = useQuery(query);

  console.log(loading, data, "madhu");

  return (
    <div className="app">
      <p className="text">{counter < 0 ? counter + 1 : counter}</p>
      <div className="buttonContainer">
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => counter < 0 || setCounter(counter - 1)}>
          Decrease
        </button>
      </div>
      {counter < 0 && <p>you cannot got for negative values!</p>}
    </div>
  );
}

export default App;
