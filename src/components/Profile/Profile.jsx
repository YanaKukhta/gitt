import ProfileModule from "./Profile.module.css";
import Post from "./Post/Post";

const Profile = () => {
 return (
   <section class={ProfileModule.profile}>
    <div class={ProfileModule.wrapperImg}>
     <img class={ProfileModule.bigImg} src="https://kzn.azbukadekor.ru/upload/iblock/a9f/a9f9699f159ccfd245ed573af7e38b1a.jpg" alt="main-img"/>
    </div>
    <div class={ProfileModule.content}>
     <div></div>
     <Post text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facilis vero. Dolores quisquam atque laboriosam natus, sapiente inventore ex voluptatibus quo non ea earum accusamus eum excepturi possimus officiis ipsum." likes="90"/>
     <Post text="Как дела?" likes="20"/>
     <Post text="Что делаешь?" likes="40"/>
    </div>
   </section>
 );
}

export default Profile;