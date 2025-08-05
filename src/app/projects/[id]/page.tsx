'use client'

import { redirect, useParams } from "next/navigation"
import ContentProject from "../content"
import { getData } from "../getData";
import { ArrowBackCircleOutline } from "react-ionicons";

export default function Projects(){
    const params = useParams()
    const { id } = params ?? "";
    if(!(id == "joke")){
        if( !(id == 'text')){
            redirect('/')
        }
    }
    const { project, github } = getData(id)

    return (
        <div className="flex relative min-h-dvh flex-col justify-center py-15 gap-15">
            <div className="absolute cursor-pointer top-5 left-3" onClick={() => redirect('/')}>
                 <ArrowBackCircleOutline
                    color={'#00000'} 
                    title={'arrow'}
                    height="50px"
                    width="50px"
                />
            </div>
           
            <h1 className="text-center text-7xl uppercase">{id == 'joke' ? 'Joke Time' : 'Text Editor'}</h1>
            <div>
                <ContentProject opt={id} />
            </div>
            <div className="flex w-screen justify-center gap-5">
                <a target="_blank" href={project} className="px-5 py-2 border-2 text-xl border-white rounded-full">Ver Projeto</a>
                <a target="_blank" href={github} className="px-5 py-2 border-2 text-xl border-white rounded-full">GitHub</a>
            </div>
        </div>
    )
}