import { Button } from "primereact/button";
import MiniCarta from "./miniCarta";
import { InputText } from "primereact/inputtext";
import chica from "../assets/imagen.webp"
import gv1 from "../assets/gv1.png"

export default function ContainerBorder(){
    return(
        
            <div className=" bg-redondo !py-50 flex flex-col 
            justify-center items-center !gap-10 w-[100vw]
            p-10 xl:px-0
            
            ">
                <div className="flex flex-col 
                 max-w-7xl justify-center items-center !gap-10 ">

                        <div id="ciclo_facturacion_texto" className="max-w-xl flex flex-col !gap-5 justify-center items-center p-5">
                            
                            <h1 className="text-center bg-blue-100 text-blue-900 text-xl md:w-md w-2xs rounded-2xl p-1">Todo lo que necesitas</h1>
                            <h2 className="text-center  text-5xl font-bold"><span className="gradient-text ">Ciclo de facturación </span> completo</h2>
                            <p className="text-center">Gesvision es el mejor software para ópticas, especialmente diseñado para <b>gestionar tu negocio</b>. Hemos pensado en <b>todo lo que tu óptica necesita</b>  para que no tengas que preocuparte por nada.</p>

                        </div>


                        <div id="ciclo_facturacion_hero" className="flex md:flex-row flex-col  px-10 !gap-10  justify-center items-center max-w-7xl">
                            <img src={gv1} alt="" className="w-1/2 h-1/2" />
                            <div className="flex flex-col !gap-10 flex-grow">

                                <MiniCarta titulo="Control total del proceso de la venta" texto="Así comiences la venta desde un presupuesto o desde unticket podrás generar automáticamente cualquier documento asociado al proceso de venta."></MiniCarta>

                                <MiniCarta titulo="Control total del proceso de la venta" texto="Así comiences la venta desde un presupuesto o desde unticket podrás generar automáticamente cualquier documento asociado al proceso de venta."></MiniCarta>

                                <MiniCarta titulo="Control total del proceso de la venta" texto="Así comiences la venta desde un presupuesto o desde unticket podrás generar automáticamente cualquier documento asociado al proceso de venta."></MiniCarta>

                            </div>

                        </div>

                        
                        <Button className="gradient-button"> Saber mas</Button>



                </div>
                <div className="w-full max-w-7xl flex flex-col gap-20 mt-20">
                    <p className="mx-auto text-center bg-blue-100 text-blue-900 text-xl md:w-md w-2xs rounded-2xl p-1">Ofrece un mejor servicio</p>
                    
                    <p className="xl:text-5xl text-4xl font-bold max-w-3xl text-center mx-auto">
                        Obten más <span className="gradient-text">clientes</span>  y aumenta tus <span className="gradient-text">ventas</span> con nuestro software para ópticas
                    </p>
                    
                    <p className=" max-w-3xl text-center mx-auto text-xl ">
                        Lleva la <b>gestión</b>  de todo lo relacionado con tus <b>clientes</b>  gracias a nuestro 
                        potente sistema integrado <b>CRM para ópticas</b>. Gracias a este sistema podrás 
                        <b> mejorar las relaciones comerciales</b> , aumentando la satisfacción e incrementando tus ventas.
                    </p>
                    <div className="flex gap-5 items-center justify-center h-full flex-col sm:flex-row ">
                        <div className="flex flex-col gap-5 flex-1 ">
                            
                                <p className="flex flex-col">
                                    <b>Notificaciones y Avisos</b> 
                                    Envía un aviso automático a tus clientes de su próxima revisión, avísales cuando su pedido esté listo para recoger y todo lo que necesites.
                                </p>
                                <p className="flex flex-col">
                                <b>Marketing automatizado</b> 
                                    Crea campañas automatizadas y llega directamente al móvil de tus clientes. Felicítales en su cumpleaños, ofréceles una prueba de lentes de contacto a aquellos clientes que no te compran ¡Y mucho más!
                                </p>
                                <p className="flex flex-col">
                                    <b>Segmentación de tus clientes</b>
                                    Segmenta a tus clientes en base a sus hábitos de consumo, su perfil, sus motivos de visita y muchos más para crear promociones personalizadas.

                                </p>
                                <p className="flex flex-col">
                                    <b>Gestión de la RGPD</b>
                                    Solicita la firma del contrato de Protección de Datos de forma digital y quedará vinculada a tu ficha de cliente. Olvídate de almacenar papel!

                                </p>
                                <Button className="gradient-button max-w-sm">Saber mas</Button>
                        </div>
                        <div className="flex-1">
                            <img src={chica} alt="" />
                        </div>
                    </div>

                </div>




            </div>
    )
}