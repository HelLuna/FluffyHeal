import './footer.css';
import logo from './img/logo.svg'
import vk from './img/vk.svg'
import tg from './img/telegram.svg'
import inst from './img/instagram.svg'

function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo} width="100" height="102" alt="Логотип FluffyHeal" />
          <p className="policy"><a href="#">Политика конфиденциальности</a></p>
          <p className="copyright">FluffyHeal ©2024 Все права защищены</p>
        </div>

        <ul className="footer-nav-list">
          <li className="footer-nav-item">
            <a href="#">Услуги</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Прайс-лист</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Акции</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Команда</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Вакансии</a>
          </li>
        </ul>

        <ul className="footer-nav-list">
          <li className="footer-nav-item">
            <a href="#">Блог</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Расшифровать анализы</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Галерея</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Отзывы</a>
          </li>
          <li className="footer-nav-item">
            <a href="#">Контакты</a>
          </li>
        </ul>

        <div className="social">
          <p className="social-text">Мы в соц. сетях:</p>
          <ul className="social-list">
            <li className="social-item">
              <a href="#">
                <img src={vk} width="25" height="25" alt="ВКонтакте" />
              </a>
            </li>
            <li className="social-item">
              <a href="#">
                <img src={tg} width="25" height="25" alt="Телеграм" />
              </a>
            </li>
            <li className="social-item">
              <a href="#">
                <img src={inst} width="25" height="25" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;