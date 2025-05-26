// import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppRoutes from './Routes/Routes'
import { ThemeProvider } from './Utils/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
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
