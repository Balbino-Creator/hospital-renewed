export default function Navegacion() {
    return(
        <nav className="py-5 bg-blue-800 text-white w-full px-10">
            <div className="mx-auto max-w-[1600px] flex justify-between items-center">
                <p className="font-extrabold text-3xl">Hospital San Gabriel</p>
                <ul className="flex gap-8">
                    <li className="text-lg cursor-pointer hover:underline">Inicio</li>
                    <li className="text-lg cursor-pointer hover:underline">Inicio</li>
                    <li className="text-lg cursor-pointer hover:underline">Inicio</li>
                    <li className="text-lg cursor-pointer hover:underline">Inicio</li>
                </ul>
            </div>
        </nav>
    )
}