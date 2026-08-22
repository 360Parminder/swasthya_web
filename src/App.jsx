// import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRoutes from './Routes/Routes'
import { ThemeProvider } from './Utils/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-red-100 selection:text-red-600 font-sans">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
