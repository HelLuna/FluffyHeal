import { ModalRoute } from '../../../utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../storage/page-slice';

export default function Signin() {
  let dispatch = useDispatch();
  let [isHide, setHide] = useState(true);

  const openModal = (modal) => {
    return (evt) => {
      evt.preventDefault();
      dispatch(setModal({ modal }));
    }
  }

  return (
    <form className="main-form">
      <h2 className="form-title">Авторизация</h2>
      <button className="close-form-btn" type="button" onClick={openModal(ModalRoute.NONE)}>Закрыть</button>
      <div className="form-row">
        <div className="form-field">
          <label for="phone">Телефон:</label>
          <input type="tel" name="phone" id="phone"
            placeholder="+7 (___)___-__-__"
            pattern="\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}" required />
        </div>
        <div className="form-field">
          <label for="password">Пароль:</label>
          <div className="input-btn">
            <input type={isHide ? "password" : "text"} name="password" id="password" placeholder="Ваш пароль" required />
            <button className="hide-password" type="button" onClick={() => setHide((hide) => !hide)}>Скрыть пароль?</button>
          </div>
        </div>
      </div>
      <div className="form-row">
        <button className="form-submit" type="submit">Войти</button>
        <div className="additional-btns">
          <a className="form-link" href="/" onClick={openModal(ModalRoute.SIGNUP)}>Регистрация</a>
          <a className="form-link" href="/" onClick={openModal(ModalRoute.SIGNIN)}>Восстановить пароль?</a>
        </div>
      </div>
    </form >
  );
}