import Image from 'next/image'
import Link from 'next/link'
import ProfileButton from './ProfileButton';

export default function Aside() {
  return (
    <>
    <aside>
      <Link href="/">
        <section className="logo">
            <Image src="/coda.webp" alt="Logo" fill sizes="()"/>
        </section>
      </Link>
      <menu>
        <ul>
          <li>
            <Link href="/">
              <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <rect x="10" y="12" width="4" height="4" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20.978 11.372a9 9 0 1 0 -1.593 5.773" />
                <path d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" />
                <path d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" />
                <path d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/hifus">
              <svg width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                <line x1="12" y1="12" x2="20" y2="7.5" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <line x1="12" y1="12" x2="4" y2="7.5" />
              </svg>
            </Link>
          </li>
        </ul>
      </menu>

      <ProfileButton />
    </aside>

    <style jsx>{`
      aside {
        background: var(--black);
        color: var(--text);
        height: 100vh;
        width: 8vw;
        position:fixed;
        top:0;
        left:0;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
      }

      aside .logo {
        width: 4vw;
        height: 4vw;
        overflow:hidden;
        position:relative;
      }

      aside menu {
        display:flex;
        justify-content:center;
      }

      aside menu ul li {
        margin-block: clamp(1rem, 2vw, 2rem);
      }

      aside .profile-button {
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        overflow:hidden;
        position:relative;
        border: 2px solid var(--text);
        cursor:pointer;
      }

      aside .profile-button img {
        transition: all .1s ease-in-out;
      }

      aside .profile-button img:hover {
        transform: scale(1.05);
      }

      h2 {
        font-size: clamp(1.75rem, 3vw, 2.5rem);
      }

      @media screen and (max-width: 768px) {
        aside {
          width: 100vw;
          height: 8vh;
        }

        aside menu {
          height: 8vh;
          flex-direction: row;
          justify-content: space-between;
          padding-inline: 5vw;
        }
      } 
    `}</style>
    </>
  );
}