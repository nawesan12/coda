const fetchHifu = (hifuId) => {
  return fetch(`https://coda-hifu.vercel.app/api/code/${hifuId}`).then(res => res.json())
}

export default async function HifuInUserPage({ params }) {

  const hifu = await fetchHifu(params?.hifuId)
  console.log(hifu)

  return (
    <>
    <iframe srcDoc={`
        ${hifu.code.html} 
        <style>${hifu.code.css}</style>
        <script>${hifu.code.js}</script> 
      `}
      frameBorder="0"
    ></iframe>

    <style jsx>{`
      iframe {
        width: 100%;
        height: 90vh;
        overflow: auto;
        background: #fff;
      }
    `}</style>
    </>
  )
}