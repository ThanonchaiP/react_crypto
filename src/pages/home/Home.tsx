import { useEffect, useState } from "react";
import axios from "axios";
import { Cryptocurrency as Cryto } from "../../types/cryptocurrency";
import Card from "./Card";
import "./Home.scss";

const Home = () => {
  const [list, setList] = useState<Cryto[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get("https://api.bitkub.com/api/market/ticker");

      let newData: Cryto[] = [];
      const dataArray = Object.entries(result.data);

      // eslint-disable-next-line
      dataArray.map((value) => {
        let data: any = value[1];
        newData.push({ ...data, name: value[0].split("_").pop() });
      });

      setList(newData);
    };

    loadData();
  }, []);

  return (
    <div className="container py-3">
      <h1 className="mb-3 fw-bold header">Today's Cryptocurrency Prices</h1>
      <div className="row">
        {list.length > 0 &&
          list.map((crypto: Cryto) => (
            <div className="gap-4 col-md-4 col-lg-3" key={crypto.id}>
              <Card crypto={crypto} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
