import './Footer.scss';
import './Footer-media.scss';
import FooterIcon from './../../assets/icons/footerlogo.png';
import WhatsappLogo from './../../assets/icons/whatsapp.svg';
import TiktokLogo from './../../assets/icons/tiktok.svg';
import InstLogo from './../../assets/icons/inst.svg';
import TelegramLogo from './../../assets/icons8-telegram.svg';

const Footer=()=>{
    return(
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__logo">
                    <img src={FooterIcon} alt="footer-icon" />
                </div>
                <div className="footer__about" id="AboutUs">
                    <h2>О нас</h2>
                    <div className="footer__about__descr">
                        <p>«RABOTA_V_KG» работает на рынке труда Кыргызстана с   2017 года. За эти годы мы сотрудничаем более с 50000 компаниями КР. <br></br><br></br> Агентство «RABOTA_V_KG»сегодня - динамично развивающаяся компания на рынке труда Кыргызстана, специализирующаяся на трудоустройстве и подборе персонала для всех сфер бизнеса. RABOTA_V_KG  представляет  вакансий по разным направлениям: от офисных сотрудников до инженеров и рабочих. Не требовательны к уровню образования сотрудников компании, ищущие обслуживающий персонал: продавцов, официантов, например, - а также офисных сотрудников (администраторов, менеджеров), операторов call-центров.</p>
                    </div>
                </div>
                <div className="footer__contact">
                    <h2>Как связаться с нами</h2>
                    <div className="footer__contact__media">
                        <a href='https://wa.me/996709453480' className="footer__contact__media-item">
                            <img src={WhatsappLogo} alt="whatsapp" />
                            <p>WhatsApp</p>

                        </a>
                        <a href='https://www.tiktok.com/@rabota_v_kgg?_t=8d9dkKe9Bs9&_r=1' className="footer__contact__media-item">

                            <img src={TiktokLogo} alt="tiktok" />
                            <p>TikTok</p>

                        </a>
                        <a href='https://instagram.com/rabota_v_kg?igshid=NTc4MTIwNjQ2YQ==' className="footer__contact__media-item">

                            <img src={InstLogo} alt="inst" />
                            <p>Instagram</p>

                        </a>
                        <a href='https://t.me/rabota_v_kg' className="footer__contact__media-item">
                            <img src={TelegramLogo} alt="telegram" />
                            <p>Telegram</p>

                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;