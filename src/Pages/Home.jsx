import React from 'react'
import Hero from '../Components/Main-Home/Hero'
import Questions from '../Components/Main-Home/Questions'
import Projects from '../Components/Main-Home/Projects'
import Advantages from '../Components/Main-Home/Advantages'
import Form from '../Components/Main-Home/Form'
import Contacts from '../Components/Main-Home/Contacts'

function Home() {
  return (
    <div>
      <Hero />
      <Questions />
      <Projects />
      <Advantages />
      <Form />
      <Contacts />
    </div>
  )
}

export default Home