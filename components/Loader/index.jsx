export default function Loader() {
  return (
    <>
    <section className="loader-container">
      <div className="loader">
      </div>
    </section>

    <style jsx>{`
      @keyframes load {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .loader-container {
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
      }

      .loader {
        width: 5rem;
        height: 5rem;
        border: 5px solid transparent;
        border-top: 5px solid var(--text);
        border-radius: 50%;
        animation: load 1s linear infinite;
      }  
    `}</style>
    </>
  )
}