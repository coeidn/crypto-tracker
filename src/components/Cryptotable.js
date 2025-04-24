import React from "react";
import { useSelector } from "react-redux";
import Cryptorow from "./Cryptorow";

const Cryptotable = () => {
  const cryptos = useSelector((state) => state.crypto);

  return (
    <>
   <div className="container-fluid">
  <div className="row justify-content-center">
    <div className="col-12 table-responsive">
      <table className="table table-hover table-bordered text-center align-middle">
        <thead className="thead-dark">
          <tr>
            <th>S.no</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <Cryptorow key={crypto.id} index={index + 1} data={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>
  );
};

export default Cryptotable;
