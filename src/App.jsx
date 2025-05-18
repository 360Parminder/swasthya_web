// import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRoutes from './Routes/Routes'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
