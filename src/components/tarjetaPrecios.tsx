import { Button } from "primereact/button"

type props = {
    titulo: "Esencial" | "Profesional" | "Empresa",


}


export default function TarjetaPrecios({titulo} : props){

    
const esencial = (
    <div className="flex flex-col gap-5 ">
        
        <h1 className="gradient-text font-bold text-2xl">{titulo}</h1>

        <p>
            <b>Para ópticas independientes</b>, tenemos un plan básico para ayudarte en esos primeros 
            pasos y que puedas <b>abrirte un camino</b>  y crecer con nosotros
        </p>
        <p className="gradient-text text-7xl font-bold">41€</p>
        <p>/al mes</p>
        <p>Pago único de 980€ al año</p>
        

        <Button className="gradient-button w-xs mx-auto"> Pruebalo gratis </Button>
        <div className="flex flex-col text-sm text-gray-700 gap-1">
                
            <p>1 tienda</p>
            <p>1 usuario</p>
            <p>Facturación</p>
            <p>Control de gastos</p>
            <p>Gestión de pacientes</p>

        </div>

    </div>
)

const profesional = (
    <div className="flex flex-col gap-5 ">
            
            <h1 className="gradient-text-red font-bold text-2xl">{titulo}</h1>

        <p>
            Si quieres <b>disfrutar de toda la potencia</b> o tienes <b>más de una tienda</b>  y crecer con
             nosotros este es tu plan. Lo tendrás absolutamente todo, siempre, al precio más competitivo del mercado
        </p>
        <p className="gradient-text-red text-7xl font-bold">132€</p>
        <p>/al mes</p>
        <p>Pago único de 790€ al año</p>
        

        <Button className="gradient-button w-xs mx-auto"> Pruebalo gratis </Button>
        <div className="flex flex-col text-sm text-gray-700 gap-1">
                
            <p>Multi-local</p>
            <p>Multi-usuario</p>
            <p>Integraciones Gesvision</p>
            <p>Control de gastos</p>
            <p>Gestión de pacientes</p>

        </div>

    </div>
)

const empresa = (
    <div className="flex flex-col gap-5 justify-between items-center h-full">

            <h1 className="gradient-text font-bold text-2xl">{titulo}</h1>

        <p>
            <b>Para ópticas independientes</b>, tenemos un plan básico para ayudarte en esos primeros 
            pasos y que puedas <b>abrirte un camino</b>  y crecer con nosotros
        </p>
        <p className="gradient-text text-2xl font-bold">Contacta con nosotros</p>

        <Button className="gradient-button w-xs mx-auto"> Contacta  </Button>
        <div className="flex flex-col text-sm text-gray-700 gap-1">
                
            <p>Consultoría especializada</p>
            <p>Integraciones a gran escala
</p>
            <p>Facturación</p>
            <p>Control de gastos</p>
            <p>Gestión de pacientes</p>

        </div>

    </div>
)



    return(
        <div className="shadow-2xl rounded-xl max-w-sm text-center flex flex-col gap-2 p-5">
            {titulo === "Empresa" ? empresa : titulo === "Esencial" ? esencial : profesional}
        </div>
    )
}