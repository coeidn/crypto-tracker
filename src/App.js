import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCrypto } from "./features/cryptoslice";
import Cryptotable from "./components/Cryptotable";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate updates for a random crypto
      const randomId = Math.ceil(Math.random() * 5); // Assuming 5 cryptos
      dispatch(
        updateCrypto({
          id: randomId,
          changes: {
            price: (Math.random() * 100000).toFixed(2),
            percent1h: (Math.random() * 10 - 5).toFixed(2),
          },
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <Cryptotable />;
};

export default App;
