import Image from "next/image"

function Card({ src, url, title, description }) {
  return (
    <div className='bg-white rounded-md shadow-md shadow-slate-400 text-slate-700 w-80 mb-5'>
      <div>
        <img src={src} alt={`previsualizacion del proyecto ${title}`} />
      </div>
      <div className='p-5'>
        <a className="text-2xl" href={url} target="_blank" rel="noreferrer">{title}</a>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  )
}

export default Card