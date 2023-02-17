import './Footer.css'

export default function Footer({name, url}) {
  return (
    <footer className="footer">
      <span> {`built with ♥ by  `}
        <a href={url} target="_blank">
        {name}</a>
      </span>
    </footer>
  )
}
