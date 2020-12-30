import NavigationModule from "./Navigation.module.css";

const Navigation = () => {
 return (
  <nav class={NavigationModule.nav}>
  <div class="nav-content nav__content">
   <ul class={NavigationModule.ul}>
    <li class={NavigationModule.li}><a href="#" class="nav-a nav__a">Profile</a></li>
    <li class={NavigationModule.li}><a href="#" class="nav-a nav__a">Messages</a></li>
    <li class={NavigationModule.li}><a href="#" class="nav-a nav__a">News</a></li>
    <li class={NavigationModule.li}><a href="#" class="nav-a nav__a">Music</a></li>
    <li class={NavigationModule.li}><a href="#" class="nav-a nav__a">Settings</a></li>
   </ul>
  </div>
 </nav>
 );
}

export default Navigation;