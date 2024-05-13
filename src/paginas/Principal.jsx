import Footer from "../componentes/Footer";
import Navegacion from "../componentes/Navegacion";

export default function Principal() {
    return(
        <>
            <Navegacion/>
            <header className="mx-auto max-w-[1600px] grid grid-cols-2 items-center gap-40 p-14">
                <p className="text-blue-800 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur iure sed culpa esse, totam assumenda quibusdam, iusto laudantium autem dolor odio repellendus neque adipisci numquam? Eius non maiores, soluta minus, rerum officia illo libero doloribus optio modi similique? Praesentium molestias quo facilis ipsum reiciendis explicabo ipsam illum esse ut!</p>
                <picture>
                    <img src="hospital.jpg" alt="hospital" className="max-w-lg rounded-md"/>
                </picture>
            </header>
            <main className="bg-blue-800 w-full">
                <div className="mx-auto max-w-[1600px] p-14 grid grid-cols-4 gap-5">
                    <h1 className="font-extrabold text-5xl text-white text-pretty">Elige tu médico y pide <span className="text-yellow-300">cita</span></h1>
                    <article className="bg-white h-96 w-80 rounded-3xl">
                        <div className="flex flex-col items-center h-full p-5">
                            <picture className="h-2/3">
                                <img src="medico.png" alt="medico" className="h-full"/>
                            </picture>
                            <div className="flex flex-col justify-between h-full">
                                <h4 className="text-blue-800 font-bold text-2xl text-center mt-4">Carlos Lobo</h4>
                                <button className="bg-yellow-300 px-5 py-3 rounded-xl">Pedir cita</button>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white h-96 w-80 rounded-3xl">
                        <div className="flex flex-col items-center h-full p-5">
                            <picture className="h-2/3">
                                <img src="medico.png" alt="medico" className="h-full"/>
                            </picture>
                            <div className="flex flex-col justify-between h-full">
                                <h4 className="text-blue-800 font-bold text-2xl text-center mt-4">Carlos Lobo</h4>
                                <button className="bg-yellow-300 px-5 py-3 rounded-xl">Pedir cita</button>
                            </div>
                        </div>
                    </article>
                    <article className="bg-white h-96 w-80 rounded-3xl">
                        <div className="flex flex-col items-center h-full p-5">
                            <picture className="h-2/3">
                                <img src="medico.png" alt="medico" className="h-full"/>
                            </picture>
                            <div className="flex flex-col justify-between h-full">
                                <h4 className="text-blue-800 font-bold text-2xl text-center mt-4">Carlos Lobo</h4>
                                <button className="bg-yellow-300 px-5 py-3 rounded-xl">Pedir cita</button>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
            <section className="w-full bg-gray-100 py-12">
                <div className="mx-auto max-w-4xl p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-8">¡Contáctanos!</h2>
                    <form action="#" className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Nombre" className="border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"/>
                            <input type="email" placeholder="Correo" className="border-2 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"/>
                        </div>
                        <input type="tel" placeholder="Teléfono" className="border-2 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"/>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Mensaje" className="border-2 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"></textarea>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Enviar Mensaje</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    )
}