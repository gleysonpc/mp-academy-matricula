import React from 'react'
import Main from '../../components/Main'
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/Topbar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout