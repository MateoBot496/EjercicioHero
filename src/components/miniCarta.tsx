type props = {
    titulo : string,
    texto: string,
}
export default function MiniCarta({titulo, texto}: props){
    return(
        <div className="flex flex-col p-6 font-arial rounded-xl bg-white shadow-[10px_0px_30px_#ffd6f5,-10px_15px_40px_#e9d5ff] ">
            <p className="font-bold">{titulo}</p>
            <p>{texto}</p>
        </div>
    )
}