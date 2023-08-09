import Image from 'next/image'
import styles from './page.module.css'
import Header from '@app/components/Header'



export default function Home() {
  return (
    <div className={styles.center}>
      <Header/>
    </div>
    
  )
}
