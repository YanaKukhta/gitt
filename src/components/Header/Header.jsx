import HeaderModule from "./Header.module.css";

const Header = () => {
 return (
  <div class="_container">
  <header class={HeaderModule.header}>
   <a>
    <img src="http://cdn.onlinewebfonts.com/svg/img_191994.png" alt="text" class={HeaderModule.logo} />
   </a>
  </header>
 </div>
 );
}

export default Header;