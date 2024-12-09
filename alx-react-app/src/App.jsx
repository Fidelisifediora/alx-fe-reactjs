
import reactLogo from './components/assets/react.svg'
import viteLogo from '/components/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

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
