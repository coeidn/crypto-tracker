import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    logo: "bitcoing.jpg",
    price: 93759.48,
    percent1h: 0.43,
    percent24h: 0.93,
    percent7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: 19.85,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    logo: "ethereum.webp",
    price: 1802.48,
    percent1h: 0.6,
    percent24h: 3.21,
    percent7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: 120.71,
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    logo: "tether.png",
    price: 1.0,
    percent1h: -0.0,
    percent24h: -0.0,
    percent7d: -0.04,
    marketCap: 145320022085,
    volume24h: 92268882007,
    circulatingSupply: 145.27,
  },
  {
    id: 4,
    name: "XRP",
    symbol: "XRP",
    logo: "xrp.avif",
    price: 2.22,
    percent1h: -0.46,
    percent24h: -0.54,
    percent7d: -6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: 58.39,
  },
  {
    id: 5,
    name: "BNB",
    symbol: "BNB",
    logo: "bnb.png",
    price: 606.65,
    percent1h: -0.09,
    percent24h: -1.2,
    percent7d: -3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: 140.89,
  },
  {
    id: 6,
    name: "Solana",
    symbol: "SOL",
    logo: "solana.jpg",
    price: 151.51,
    percent1h: -0.53,
    percent24h: -1.26,
    percent7d: -14.74,
    marketCap: 78381958631,
    volume24h: 4881674486,
    circulatingSupply: 517.31,
  },
  // Add more cryptos here
];

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateCrypto: (state, action) => {
      const { id, changes } = action.payload;
      const crypto = state.find((item) => item.id === id);
      if (crypto) {
        Object.assign(crypto, changes);
      }
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;

export default cryptoSlice.reducer;
