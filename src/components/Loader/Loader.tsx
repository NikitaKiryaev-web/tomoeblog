import './Loader.scss';
import React, { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="loader">
        Загружаем контент &#129322;
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  );
};

export default Loader;