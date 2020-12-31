import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const paths = []
  data.map(user => {
    paths.push({ params: { id: "" + user.id } })
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const post = await res.json()
  return {
    props: { post },
    revalidate: 1,
  }
}
const User = ({ post }) => {
  const router = useRouter()
  const { id } = router.query
  console.log(post)
  return <h1>{post.name}</h1>
}

export default User