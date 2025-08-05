export type Data = {
    project: string
    github: string
}

export function getData(opt: string | undefined | string[]): Data {
    if(opt == 'joke'){
        return {
            github: 'https://github.com/eliel-pf-99/joker_api',
            project: 'https://joke-front.vercel.app/',
        }
    }
    return {
        github: 'https://github.com/eliel-pf-99/text-editor',
        project: 'https://text-editor-eti0.onrender.com/'
    }
}