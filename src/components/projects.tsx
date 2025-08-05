import Link from "next/link";

function Projects(){
    return (
        <div className="flex relative min-h-dvh flex-col md:justify-center text-center items-center px-32 gap-5 text-xl">
                <h2 className="md:absolute w-screen md:w-xl text-left md:px-8 px-5 text-xl top-15 left-15 uppercase font-bold">Meus Projetos</h2>
                <div className="flex md:flex-row flex-col gap-25 text-4xl">
                    <Link href="/projects/joke" className="cursor-pointer md:w-xl w-screen">Joke Time</Link>
                    <Link href="/projects/text" className="cursor-pointer md:w-xl w-screen">Text Editor</Link>
                </div>
        </div>
    );
}

export default Projects;