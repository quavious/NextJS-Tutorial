import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home(){
  return (
    <div className={styles.container}>
      <h1>Hello World!</h1>
      <Link href="/page1">Go to Page 1</Link>
      <Link href="/page1/board">Go to Page Board</Link>
      <Link href="/newpage">Go To Newpage</Link>
    </div>
  )
}