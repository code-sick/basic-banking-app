import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns } from "react-bootstrap";
import CustomerCard from "../Components/cards";

function Costumers() {
  const [results, setResults] = useState([]);
  const [myAccountBalance, setMyAccountBalance] = useState(1000000);
  console.log(myAccountBalance);

  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const fetchData = () => {
    fetch("https://basic-banking-api.herokuapp.com/api/customers")
      .then((res) => res.json())
      .then((results) => {
        setResults(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const parsedMyAccountBalance = Number(
      localStorage.getItem("myAccountBalance") || 1000000
    );
    setMyAccountBalance(parsedMyAccountBalance);
  }, []);

  useEffect(() => {
    localStorage.setItem("myAccountBalance", myAccountBalance);
  }, [myAccountBalance]);

  return (
    <div className="Costumers">
      <div>
        <div className="blank"></div>
        <div className="myInfo">
          <div>
            <h1>Name: Arragon</h1>
            <h1>Email ID: arragon@middleEarth.com</h1>
            <h1>Account Balance: ${formatNumber(myAccountBalance)}</h1>
          </div>
        </div>
      </div>
      <div>
        <CardColumns>
          {results.map((result) => {
            return (
              <CustomerCard
                result={result}
                key={result._id}
                setMyAccountBalance={setMyAccountBalance}
                myAccountBalance={myAccountBalance}
              />
            );
          })}
        </CardColumns>
      </div>
    </div>
  );
}

export default Costumers;
