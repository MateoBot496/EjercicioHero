export default function CartaValoracion(){
    const star = (
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-green-500 shrink-0">
            <path
                d="M12 2l2.9 6.3L22 9.2l-5 4.9L18.2 22 12 18.6 5.8 22 7 14.1 2 9.2l7.1-.9L12 2z"
                fill="currentColor"
            />
            </svg>
    )

    const avatar = (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-500 shrink-0">
  <path
    d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z"
    fill="currentColor"
  />
</svg>
    )
    return(
        <div className="bg-blue-50 p-5 font-arial flex flex-col !gap-3 rounded-xl">
            <div className="font-bold !gap-3 flex justify-center items-center flex-col xl:flex-row "> 
                <div className="flex justify-center items-center gap-2">

                    {avatar}
                    <p>Multiopticas</p>
                </div>

                <div className="flex">   
        
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}

                </div>
            </div>
            <div>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus possimus ..."</div>
            <div className="font-bold"> Vicente Martinez</div>
        </div>
    )
}