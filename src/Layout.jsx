const Layout = (props) => {
  return (
    <>
      <h1>Heeder</h1>
      {props.children}
      <h1>Footer</h1>
    </>
  )
}

export default Layout