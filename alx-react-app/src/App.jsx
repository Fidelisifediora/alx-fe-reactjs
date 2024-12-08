
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './assets/Header'
import MainContent from './MainContent'
import Footer from './Footer'
import UserProfile from './UserProfile'

function App() {


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <WelcomeMessage/>
        <Header/>
        <MainContent/>
        <Footer/>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>

      </div>
    </>
  )
}

export default App
