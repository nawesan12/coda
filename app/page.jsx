export default function RootPage() {
  return (
    <>
    <section className="home_page">
      <section className="presentation">
        <div className="titles">
          <h1>Welcome to Coda</h1>
          <h3>The place where your code can be free</h3>
        </div>
      </section>

      <section className="features">
        <article>
          <div className="description">
            <h2>Share your creations</h2>
            <p>Share your code with other developers! </p>
          </div>

          <figure className="image">
            {/* <Image src="/assets/presentation/share.svg" alt="" fill sizes="()"/> */}
          </figure>
        </article>

        <article>
          <div className="descriptions">
            <h2>Get inspired</h2>
            <p>Explore awesome projects and get inspired by the community!</p>
          </div>

          <figure className="image">
            {/* <Image src="/assets/presentation/inspiration.svg" alt="" fill sizes="()"/> */}
          </figure>
        </article>

        <article>
          <div className="descriptions">
            <h2>Learn from others</h2>
            <p>Knowledge never is enough! Learn from projects from others!</p>
          </div>

          <figure className="image">
            {/* <Image src="/assets/presentation/learn.svg" alt="" fill sizes="()"/> */}
          </figure>
        </article>

        <article>
          <div className="descriptions">
            <h2>Be part of our community</h2>
            <p>Bla bla bla</p>
          </div>

          <figure className="image">
            {/* <Image src="/assets/presentation/community.svg" alt="" fill sizes="()"/> */}
          </figure>
        </article>
      </section>
    </section>

    <style jsx>{`
      .home_page {
        margin-inline: auto;
      }

      .presentation {
        height: 95vh;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .presentation .titles {
        border: .15rem solid var(--text);
        padding: 1.5rem;
        border-radius: 1.5rem;
      }

      h1 {
        font-size: clamp(3rem, 6vw, 5rem);
      }

      .features h2 {
        font-size: clamp(2rem, 4vw, 3rem);
        margin-bottom: 2rem;
      }

      .features p {
        font-size: clamp(1rem, 2vw, 1.5rem);
      }

      h3 {
        text-align:right;
      }

      .features {
        padding-inline: 5vh;
        margin-inline: 0 auto;
      }

      .features article {
        padding-block: 0 7.5vh;
        display:flex;
        align-items:center;
        justify-content: space-evenly;
      }

      .features article:nth-child(even) {
        flex-direction: row-reverse;
      }

      .features .image {
        position: relative;
        width: 250px;
        height: 250px;
        overflow:hidden;
      }
    `}</style>
    </>
  );
}