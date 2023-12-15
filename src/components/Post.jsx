import { Comment } from "./Comment";
import { Avatar } from './Avatar';
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/117386154?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Raissa Curty</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="13 de Dez às 17:00" dateTime="2023-12-13 17:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>
          <a href="">github/curtyraissa</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
