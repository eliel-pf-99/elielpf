'use client'

type ContactProps = {
    title: string
    content: string
    btnTitle: string
    link: string
}

function ContactIem(props: ContactProps){

    async function copy(){
        try{
            await navigator.clipboard.writeText(props.content)
        }
        catch(err: unknown){
            console.log('Ops parece que não consigo copiar ¯\_(ツ)_/¯')
        }
    }

    return (
        <div className="flex flex-col items-start gap-3 relative px-5">
            <div className="h-full w-1 absolute left-0 bg-white"></div>
            <p className="font-bold">{props.title}</p>
            <p>{props.content}</p>
            <div className="flex gap-5">
                <a target="_blank" href={props.link} className="px-5 py-1 cursor-pointer border-2 border-white rounded-full hover:bg-white hover:text-black">{props.btnTitle}</a>
                <button onClick={copy} className="px-5 py-1 cursor-pointer border-2 border-white rounded-full hover:bg-white hover:text-black">copiar</button>
            </div>
        </div>
    )
}

export default ContactIem;