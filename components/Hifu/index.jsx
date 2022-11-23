import Link from 'next/link'

export default function HifuCard({ id, title, description, author }) {
  return (
    <>
    <Link href={`/${author.username}/${id}`}>
      <article className='hifu'>
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>{author.username}</h5>
      </article>
    </Link>

    <style jsx>{`
      .hifu {
        width:min(90vw, 400px);
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 1rem;
        background: var(--bg);
        color: var(--text);

        display: flex;
        flex-direction: column;
        gap: 1rem;

        border: 1px solid #ccc;
        cursor: pointer;
      }

      .hifu h3 {
        text-align:center;
      }

      .hifu p {
        font-size: 1.2rem;
        font-weight: 500;
      }
    `}</style>
    </>
  )
}