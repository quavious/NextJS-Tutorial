import styles from "./custom.module.scss"

function Heading(props){
  const color = Math.random() > 0.5 ? "red" : "blue";
  return <div><h1>{props.heading}</h1>
  <style jsx>
      {
        `
        h1 {
          color: ${color}
        }
        `
      }
    </style>
    </div>
}

export default function Home() {
  return (
    <div className="title">
      <Heading heading="heading"/>
      <h1 className={styles['content-2']}><span>Magneta within SCSS</span>Block</h1>
    </div>
  )
}
