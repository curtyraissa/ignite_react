export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/117386154?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Raissa Curty</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="13 de Dez às 17:00" dateTime="2023-12-13 17:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>blablabla</p>
                <p><a href="">github/curtyraissa</a></p>
                <p><a href="">#novoprojeto</a></p>
            </div>
        </article>
    )
}