export default function Loading() {
  return (
    <>
      <section className="loading">
        <h5>Looking for some hifus!</h5>
      </section>

      <style jsx>{`
        .loading {
          display:flex;
          justify-content: center;
          align-items: center;
          height: 50vh;
        }  
      `}</style>
    </>
  )
}