import './App.css'
import DefaultLayout from './layout/layout'
import MainHero from './components/MainHero'
import ContainerBorder from './components/containerBorder'
import TarjetaPrecios from './components/tarjetaPrecios'
function App() {
  
  

  return (
    <DefaultLayout>
      <MainHero></MainHero>
      <ContainerBorder></ContainerBorder>
      <div className='flex flex-col xl:flex-row gap-5 my-30'>
        
      <TarjetaPrecios titulo='Esencial' />
      <TarjetaPrecios titulo='Profesional' />
      <TarjetaPrecios titulo='Empresa' />
      </div>
    

    </DefaultLayout>
  )
}

export default App
