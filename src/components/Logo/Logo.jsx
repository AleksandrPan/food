import './style.css';
import logoSrc from '../../assets/img/logo.svg';

function Logo ({className}) {
  return (
  <a href='/' className={className ? className : 'logo'}>
    <img src={logoSrc} alt='pictures' className='logo__pic'/>
  </a>
  );
};

export default Logo;
