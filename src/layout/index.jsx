import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout