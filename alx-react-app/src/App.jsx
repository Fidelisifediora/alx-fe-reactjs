
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import MainContent from '../MainContent'
import Footer from './Footer'
import WelcomeMessage from './WelcomeMessage'
import UserProfile from './UserProfile'
import Counter from './Counter'
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
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter/>
    </div>
    </>
  )
}

export default App
