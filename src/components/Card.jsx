import styles from '../../styles/Card.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
const Card = (props) => {
  const { name, email, id } = props.user
  const router = useRouter()
  return (
    <Link href={`/user/${id}`}>
      <div className={styles.cardContainer}>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    </Link>
  )
}

export default Card