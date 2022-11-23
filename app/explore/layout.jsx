export default function ExploreLayout({ children }) {
  return (
    <>
      <section className="explore">
        <header>
          <div>
            <h2>Explore</h2>
            <p>Where your code lives</p>
          </div>
          <input type="text" placeholder="Search a Hifu"/>
        </header>
        <hr />
        {children}
      </section>

      <style jsx>{`
        header {
          display:flex;
          justify-content: space-between;
        } 

        hr {
          margin-block: 3.5vh 2.5vh;
        }

        input {
          margin:  2.5vh 0;
          padding: 1.5vh 1.5vw;
          border: 1px solid #ccc;
          border-radius: 2rem;
          outline: none;
          font-size: 1.25rem;
        }
      `}</style>
    </>
  );
}