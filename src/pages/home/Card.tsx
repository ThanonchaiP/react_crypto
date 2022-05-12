import { Cryptocurrency as Cryto } from "../../types/cryptocurrency";
import "./Card.scss";

type Props = {
  crypto: Cryto;
};
const Card = ({ crypto }: Props) => {
  return (
    <>
      <div className="px-4 pt-3 mb-3 shadow card w-100 position-relative">
        <div className="d-flex align-items-center">
          <img
            src={`https://cdn.bitkubnow.com/coins/icon/${crypto.name}.png`}
            width={50}
            loading="lazy"
            className="rounded-circle"
            alt=""
          />
          <div className="title ms-3">
            <h4 className="m-0 fw-bold">{crypto.name}</h4>
            <p className={`m-0 fw-bold ${crypto.percentChange < 0 ? "text-danger" : "text-success"}`}>
              {crypto.percentChange} %
            </p>
          </div>
        </div>

        <div className={`icon ${crypto.percentChange < 0 ? "bg-danger" : "bg-success"}`}>
          <i className={`text-white fa-solid ${crypto.percentChange < 0 ? "fa-angle-down" : "fa-angle-up"} `} />
        </div>

        <div className="px-0 card-body">
          <div className="mt-1 info">
            <p>PRICE : {crypto.last.toFixed(2)} THB</p>
            <p>24H HIGH : {crypto.high24hr.toFixed(2)} THB</p>
            <p>24H LOW : {crypto.low24hr.toFixed(2)} THB</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
