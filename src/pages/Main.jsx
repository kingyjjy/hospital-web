import React from 'react'
import TopNav from '../layout/TopNav'
import Search from '../layout/Search'
import Footer from '../layout/Footer'
import Category from '../components/Category'

const Main = () => {
  return (
    <div>
        <TopNav/>
        <Search/>
        <Category />
        main
        <Footer />
    </div>
  )
}

export default Main