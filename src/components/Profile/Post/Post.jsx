import PostModule from "./Post.module.css";

const Post = (props) => {
 return (
  <article class={PostModule.post}>
   <a href="#" class={PostModule.img__link}><img src="https://raduga.net.ru/wp-content/uploads/2020/08/avatarka-prikolnaya.jpg" alt="ava" class={PostModule.ava} /></a>
   <div class={PostModule.wrapper}>
    <p class={PostModule.text}>{props.text}</p>
    <p className={PostModule.likes}>Оценило {props.likes} человек</p>
   </div>
  </article>
 );
}

export default Post;