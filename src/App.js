import React from 'react'
import Container from './layout/container'
import Content from './layout/content'
import Sidebar from './layout/sidebar'
import Widgets from './layout/widgets'

const App = () => {
  return (
    <Container>
      <Sidebar>sidebar</Sidebar>
      <Content>Feed</Content>
      <Widgets>TimeLine</Widgets>
    </Container>
  )
}

export default App
