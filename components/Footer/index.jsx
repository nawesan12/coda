export default function Footer() {
  return (
    <>
    <footer className="footer">
      <section className="credits">
        <p>Powered by <a href="https://nsantillan.tech/en" target="_blank" rel="noreferrer">Nahuel Santillan</a></p>
        <span>And the <a href="https://devspot.vercel.app">Devspot</a> team</span>
      </section>

      <div>
        <ul className="flat-list">
          <li>Github</li>
          <li>Twitter</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </footer>

    <style jsx>{`
      .footer {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        height: 25vh;
        width: 100vw;
        background: #000;
        color: var(--text);
        gap: 1rem;
      }

      .flat-list {
        gap: 2.5rem;
      }
    `}</style>
    </>
  );
}