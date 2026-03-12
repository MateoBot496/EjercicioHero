
import { Button } from "primereact/button"
import dashUrl from "../assets/dash.svg"
import CartaValoracion from "./cartaValoracion"
import MiniCarta from "./miniCarta"
import { Carousel } from "primereact/carousel";

const calc = (
    <svg viewBox="0 0 24 24" className="w-10 h-10 text-yellow-500 shrink-0">
      <path
        d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
        fill="currentColor"
      />
      <rect x="8" y="5" width="8" height="3" rx="1" fill="white"/>
      <rect x="8" y="10" width="2" height="2" fill="white"/>
      <rect x="11" y="10" width="2" height="2" fill="white"/>
      <rect x="14" y="10" width="2" height="2" fill="white"/>
      <rect x="8" y="13" width="2" height="2" fill="white"/>
      <rect x="11" y="13" width="2" height="2" fill="white"/>
      <rect x="14" y="13" width="2" height="2" fill="white"/>
      <rect x="8" y="16" width="2" height="2" fill="white"/>
      <rect x="11" y="16" width="5" height="2" fill="white"/>
    </svg>
  )

const itemsCarroussel = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

const itemTemplate = (item) => {
  return <CartaValoracion key={item.id} {...item} />;
};

const responsiveOptions = [
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: "1024px",
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: "640px",
    numVisible: 1,
    numScroll: 1
  }
];

// Define how many items to show at different screen sizes

export default function MainHero(){
    const tick = (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500 shrink-0">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
    return(
        <div className='w-full pt-20 bg-gv min-h-screen px-10 6xl:px-0 mb-40'>
          <div className="min-h-[90dvh] ">
            
            <div className='main-hero flex flex-col md:flex-row gap-5 justify-center items-center w-full max-w-7xl mx-auto'>
                  <div className='hero-text flex flex-col gap-10 justify-center sm:text-left text-center'>
                    <p className='text-5xl font-bold'>El <span className='gradient-text'>software para ópticas</span> más avanzado</p>
                    <p>Gesvision te da todo lo que tu óptica necesita, en un solo lugar.</p>
                    <b className='flex items-center gap-2'>
                      {tick}
                      Gestiona tus ventas y gastos de manera eficáz
                    </b>

                    <b className='flex items-center gap-2'>
                      {tick}
                      Lleva un seguimiento completo de tus clientes y sus exámenes de optometría y contactología pruébalo gratis
                    </b>
                    <Button className="gradient-button  w-1/2 mx-auto sm:mx-0">Pruébalo gratis</Button>
                  </div>
                  <div>
                    <img src={dashUrl} alt="" />
                  </div>
            </div>

            {/* VALORACIONES */}
            <div className="w-full mx-auto max-w-7xl flex flex-col 
            justify-center items-center !gap-8 p-4 mt-20">
                <p className="max-w-7xl text-5xl font-bold whitespace-normal text-center">Conoce la <span className="gradient-text ">opinión</span> de nuestros clientes</p>
            
            <Carousel
  value={itemsCarroussel}
  itemTemplate={itemTemplate}
  numVisible={3}
  numScroll={1}
  responsiveOptions={responsiveOptions}
  pt={{
    root: { className: "w-full" },

    content: {
      className: "relative flex items-center justify-center w-full"
    },

    itemsContent: {
      className: "overflow-hidden w-full max-w-5xl mx-auto"
    },

    itemsContainer: {
      className: "flex"
    },

    item: ({ state }) => ({
      className: "flex justify-center items-center shrink-0 px-4 w-20 xl:w-50 md:w-30 sm:w-25",
      style: {
        flexBasis: `${100 / state.numVisible}%`,
        maxWidth: `${100 / state.numVisible}%`
      }
    }),

    previousButton: {
      className:
        "absolute left-0 sm:-left-10 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl text-blue-600 hover:scale-110 transition-all top-1/2 -translate-y-1/2"
    },

    nextButton: {
      className:
        "absolute right-0 sm:-right-10 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl text-blue-600 hover:scale-110 transition-all top-1/2 -translate-y-1/2"
    }
  }}
/>



                <p className="font-bold text-blue-500"><a href='/' >Ver todas las valoraciones</a></p>
            </div>
          </div>

               {/* MINI CARTAS */}
            <div className="w-full flex flex-col !gap-10 max-w-7xl 
            px-10 6xl:px-0 mx-auto ">
                
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    Sencillamente, <span className="gradient-text ">el mejor </span></h1>

                
                <div className="grid-mini w-full !gap-10">


                    <div className="flex flex-col !gap-6 rounded-xl ">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>
                    
                    <div className="flex flex-col !gap-6 ">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>
                    
                    <div className="flex flex-col !gap-6">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>
                    
                    <div className="flex flex-col !gap-6">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                    
                    <div className="flex flex-col !gap-6">
                        {calc}
                        <MiniCarta titulo="Facturacion" texto="Todo el ciclo de compra-venta completo, lleva un control de tus pedidos, albaranes, tickets y vincula estos documentos entre sí"></MiniCarta>
                    </div>  
                </div>



            </div>
      </div>
    )
}