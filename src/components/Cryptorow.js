import React from "react";

const Cryptorow = ({ index, data }) => {
  const {
    logo,
    name,
    symbol,
    price,
    percent1h,
    percent24h,
    percent7d,
    marketCap,
    volume24h,
    circulatingSupply,
  } = data;

  return (
    <tr>
      <td>{index}</td>
      <td>
        <img src={logo} alt={name} style={{ width: "24px" }} />
      </td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${price.toLocaleString()}</td>
      <td className={percent1h > 0 ? "text-success" : "text-danger"}>
        {percent1h}%
      </td>
      <td className={percent24h > 0 ? "text-success" : "text-danger"}>
        {percent24h}%
      </td>
      <td className={percent7d > 0 ? "text-success" : "text-danger"}>
        {percent7d}%
      </td>
      <td>${marketCap.toLocaleString()}</td>
      <td>${volume24h.toLocaleString()}</td>
      <td>{circulatingSupply}M</td>
    </tr>
  );
};

export default Cryptorow;
