function Hero() {
    return (
    <>
         <div className="md:flex px-5 flex-col min-h-dvh justify-center items-center hidden">
            <div className="flex uppercase items-center gap-5 mb-15">
                <h2 className="text-5xl">Olá, eu sou <br /> Eliel Ferreira.</h2>
                <div className="h-24 w-1 bg-white"></div>
                <div>
                    <h1 className="text-7xl">Um dev FullStack</h1>
                </div>
            </div>
            <div>
                <h3 className="text-4xl">Sua ideia merece um dev que joga no mesmo time!</h3>
            </div>
        </div>   
        <div className="px-5 py-15 min-h-dvh flex flex-col gap-15 text-base/tight md:hidden">
            <h2 className="text-4xl uppercase">Olá, eu sou <br /> Eliel Ferreira.</h2>
            <h1 className="text-7xl uppercase">Um dev Full-Stack</h1>
            <h3 className="text-3xl">Sua ideia merece um dev que joga no mesmo time!</h3>
        </div>  

    </>
    )
}

export default Hero;