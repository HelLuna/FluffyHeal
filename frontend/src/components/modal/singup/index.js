import { ModalRoute } from '../../../utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../storage/page-slice';
import { signUpForm } from '../../../api/forms-api';
import APIRoutes from '../../../api/api-routes';

export default function Signup() {
  let dispatch = useDispatch();
  let [isHidePwd, setHidePwd] = useState(true);
  let [isHideRep, setHideRep] = useState(true);

  const openModal = (modal) => {
    return (evt) => {
      evt.preventDefault();
      dispatch(setModal({ modal }));
    }
  }

  return (
    <form className="main-form" action={APIRoutes.SINGUP} method="post" onSubmit={signUpForm}>
      <h2 className="form-title">Регистрация</h2>
      <button className="close-form-btn" type="button" onClick={openModal(ModalRoute.NONE)}>Закрыть</button>

      <div className="form-row">
        <div className="form-field">
          <label for="phone">Телефон *:</label>
          <input type="tel" name="phone" id="phone"
            placeholder="+7 (___)___-__-__"
            pattern="\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}" required />
        </div>
        <div className="form-field">
          <label for="email">E-mail:</label>
          <input type="email" name="email" id="email" placeholder="Адрес эл. почты" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label for="password">Пароль *:</label>
          <div className="input-btn">
            <input type={isHidePwd ? "password" : "text"} name="password" id="password" placeholder="Пароль *" required />
            <button className="hide-password" type="button" onClick={() => setHidePwd((hide) => !hide)}>Скрыть пароль?</button>
          </div>
        </div>
        <div className="form-field">
          <label for="password-rep">Повторите пароль *:</label>
          <div className="input-btn">
            <input type={isHideRep ? "password" : "text"} name="password-rep" id="password-rep" placeholder="Пароль *" required />
            <button className="hide-password" type="button" onClick={() => setHideRep((hide) => !hide)}>Скрыть пароль?</button>
          </div>
        </div>
      </div>

      <div className="form-full-name">
        <div className="form-row long-input">
          <label for="name">Имя *:</label>
          <input type="text" name="name" id="name" placeholder="Ваше имя *" required />
        </div>

        <div className="form-row long-input">
          <label for="surname">Фамилия *:</label>
          <input type="text" name="surname" id="surname" placeholder="Ваша фамилия *" required />
        </div>

        <div className="form-row long-input">
          <label for="patronymic">Отчество:</label>
          <input type="text" name="patronymic" id="patronymic" placeholder="Ваше отчество" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field end-field">
          <label for="birhday">День рождения:</label>
          <input type="date" name="birhday" id="birhday" placeholder="дд.мм.гггг" />
        </div>
        <div className="form-field end-field">
          <label for="file">Аватар:</label>
          <input type="file" name="file" id="file" placeholder="Прикрепите файл" />
        </div>
      </div>

      <p className="prompt">* Обязательные поля</p>
      <p className="user-policy">Нажимая кнопку «Готово» вы соглашаетесь с <a href="/" target='_blank'>политикой обработки персональных данных</a></p>

      <button className="form-submit form-registration-btn" type="submit">Готово</button>
    </form>
  );
}