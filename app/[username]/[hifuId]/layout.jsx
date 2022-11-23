import Link from "next/link";

export default function HifuInUserLayout({ children, params }) {
  return (
    <>
    <section className="hifu-in-user">
      <header>
        <h2>
          <Link href={`/${params.username}`}>{params.username}{"`"}s</Link> hifu
        </h2>

        <menu>
          <ul>
            <li></li>
          </ul>
        </menu>
      </header>
      {children}
    </section>

    <style jsx>{`      
      .hifu-in-user {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 12vh 90vh;
      }

      header{
        background: var(--black);
        color: var(--text);
        padding: clamp(2rem, 2vw, 3rem);
        display:flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
    </>
  );


}