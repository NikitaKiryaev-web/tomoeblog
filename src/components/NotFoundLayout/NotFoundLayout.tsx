import './NotFoundLayout.scss';
import React, { FC } from "react";
import { Link } from "react-router-dom";
import notFoundImg from '../../assets/images/notFound.gif'

const NotFoundLayout: FC = () => {
  return (
  <div className="not-found">
    <h2 className="not-found__title">Заблудился?</h2>
    <img src={notFoundImg} alt="Not found" className="not-found__image" />
    <Link className='not-found__link' to='/'>Вернуться на главную &#128515;</Link>
  </div>
  )
};

export default NotFoundLayout;
