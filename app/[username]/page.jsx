import Image from "next/image";
import Link from "next/link";

const fetchUniqueUser = (username) => {
  return fetch(`https://coda-hifu.vercel.app/api/users/${username}`).then((res) => res.json());
};

export default async function UniqueUserPage({ params }) {
  const { username } = params
  const user = await fetchUniqueUser(username)

  return (
    <>
    <section className="unique-user-wrapper">
      <header className="block">
        <figure className="user-image">
          <div className="image">
            <Image src={user.avatar} alt={user.name} fill sizes="()"/>
          </div>

          <figcaption>{user.name}</figcaption>
        </figure>

        <div className="user-info">
          <h2>{user.username}</h2>
        </div>

        <ul className="flat-list">
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </header>

      <main className="user-main-info block">
        <section className="hifus">
          <h3>Projects</h3>
          {
          user.hifus.map((hifu, index) => (
            <Link href={`/${user.username}/${hifu.id}`} key={index}>
              {hifu.title}
            </Link>
          ))
          }
        </section>
      </main>

      <footer className="block">
          user footer
      </footer>
    </section>

    <style jsx>{`
      .unique-user-wrapper  {
        display:flex;
        flex-direction: column;
        align-items:center;
        gap: 5vh;
      }

      .block {
        background: #353540;
        width:min(100%, 1000px);
        border-radius: 1vw;
      }

      header {        
        height:50vh;
        display:grid;
        place-items:center;
        grid-template-columns: .5fr 1fr;
        grid-template-rows: 1fr 25%;
      }

      header figure {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        text-align:center;
      }

      header figure .image {
        width: clamp(100px, 30vw, 200px);
        aspect-ratio: 1/1;
        position:relative;
        overflow:hidden;
      }

      header figure img {
        border-bottom: 2px solid var(--text);
      }

      header figure figcaption {
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-weight: 600;
        color: #fff;
        min-width: max-content;
        white-space: nowrap;
      }

      .user-main-info {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 2.5vh;
      }
    `}</style>
    </>
  );
}