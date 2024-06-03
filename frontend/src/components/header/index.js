import './header.css';
import logo from './img/logo.svg'
import day24 from './img/work-time.svg'
import userEmpty from './img/user.svg'

import { AppRoute, ModalRoute } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setModal } from '../../storage/page-slice';

export default function Header() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userInfo.id);
  const firstName = useSelector((state) => state.userInfo.firstName);
  const lastName = useSelector((state) => state.userInfo.lastName);
  const userImg = useSelector((state) => state.userInfo.imageUrl);

  const followLink = (page) => {
    return (evt) => {
      evt.preventDefault();
      dispatch(setPage({ page }));
    }
  }

  const openModal = (modal) => {
    return (evt) => {
      evt.preventDefault();
      dispatch(setModal({ modal }));
    }
  }

  return (
    <header className="page-header">
      <section className="header-info">
        <a className="logo" href="/" onClick={followLink(AppRoute.INITIAL)}>
          <img src={logo} width="90" height="92" alt="Логотип FluffyHeal" />
        </a>

        <ul className="address-list">
          <li className="address-item">
            <a href="/" onClick={followLink(AppRoute.CONTACTS)}>м. Пролетарская: пр-кт Обуховской Обороны, д. 110Н</a>
          </li>
          <li className="address-item">
            <a href="/" onClick={followLink(AppRoute.CONTACTS)}>м. Горьковская: ул. Чапаева, д. 7</a>
          </li>
          <li className="address-item">
            <a href="/" onClick={followLink(AppRoute.CONTACTS)}>м. Проспект Просвещения: ул. Архитектора Белова, д. 6, к. 3</a>
          </li>
          <li className="address-item">
            <a href="/" onClick={followLink(AppRoute.CONTACTS)}>м. Выборгская: Полюстровский пр-кт, д. 59Х</a>
          </li>
        </ul>

        <a className="all-day" href="/" onClick={followLink(AppRoute.CONTACTS)}>
          <img src={day24} width="53" height="53" alt="Время работы - круглосуточно" />
        </a>

        <ul className="phone-list">
          <li className="phone-item">
            <a href="tel:+78129999998">+7 (812) 999-99-98</a>
            <p>Записаться</p>
          </li>
          <li className="phone-item">
            <a href="tel:+78129999999">+7 (812) 999-99-99</a>
            <p>Экстренный звонок</p>
          </li>
        </ul>
      </section>

      <nav className="app-nav">
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" onClick={followLink(AppRoute.SERVICES)}>Услуги</a>
            </li>
            <li className="nav-item">
              <a href="/" onClick={followLink(AppRoute.PRICE_LIST)}>Прайс-лист</a>
            </li>
            <li className="nav-item">
              <a href="/" onClick={followLink(AppRoute.TEAM)}>Команда</a>
            </li>
            <li className="nav-item">
              <a href="/" onClick={followLink(AppRoute.BLOG)}>Блог</a>
            </li>
            <li className="nav-item">
              <a href="/" onClick={followLink(AppRoute.ANALYZES)}>Расшифровать анализы</a>
            </li>
            <li className="nav-item">
              <a h href="/" onClick={followLink(AppRoute.CONTACTS)}>Контакты</a>
            </li>
          </ul>

          <button className="reception-btn" type="button" onClick={openModal(ModalRoute.BID)}>Записаться на приём</button>

          {userId ?
            (
              <a className="signin" href="/" onClick={followLink(AppRoute.PROFILE)}>
                <p>`${firstName} ${lastName[0]}</p>
                <img src={userImg} width="36" height="36" alt="Аватар пользователя" />
              </a>
            ) :
            (
              <a className="signin" href="/" onClick={openModal(ModalRoute.SIGNIN)}>
                <p>Войти</p>
                <img src={userEmpty} width="36" height="36" alt="Вход в личный кабинет" />
              </a>
            )
          }
        </div>
      </nav>
    </header >
  )
}