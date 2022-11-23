import HifuCard from "@components/Hifu";

const fetchHifus = () => {
  return fetch(`https://coda-hifu.vercel.app/api/code`, {cache: "no-store"})
    .then((res) => res.json())
}

export default async function ExplorePage() {

  const hifus = await fetchHifus()

  return (
    <>
    <section className="hifus">
      {hifus.map((hifu, index) => (
        <HifuCard 
          id={hifu.id}
          title={hifu.title} 
          username={hifu.username} 
          description={hifu.description} 
          author={hifu.author} 
          key={index}
        />
      ))}
    </section>

    <style jsx>{`
        .hifus {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1vw;
        }

        @media screen and (max-width: 768px) {
          .hifus {
            flex-direction: column;
          }
        }
    `}</style>
    </>
  );
}