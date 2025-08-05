export default function ContentProject({opt}: {opt: string | undefined | string[]}){
    if (opt == "joke")
    {
        return (
            <>
                <div className="md:hidden flex flex-col justify-center text-left items-start px-5 gap-5 text-xl">
                    <h2>Joke Time é um app web criado para trazer leveza e boas risadas, mas com responsabilidade. Desenvolvido com React no frontend e FastAPI no backend, o projeto entrega piadas aleatórias direto de uma API que eu mesmo construí.</h2>
                    <h3 className="self-start"> Além de buscar piadas, o usuário pode:</h3>
                    <ul className="flex flex-col px-10 items-start list-disc">
                        <li>Adicionar sua própria piada</li>
                        <li>Denunciar piadas ofensivas ou abusivas</li>
                        <li>Piadas com mais de 4 denúncias são removidas automaticamente do banco de dados</li>
                    </ul>
                    <h2>Esse projeto foi uma ótima oportunidade de aplicar conceitos de CRUD, rotas protegidas, consumo de API própria e controle de conteúdo colaborativo. Um app simples, mas que une humor e moderação de forma prática e inteligente.</h2>
                </div>
                <div className="hidden md:flex flex-col justify-center text-left items-start px-32 gap-5 text-xl">
                    <h2>Joke Time é um app web criado para trazer leveza e boas risadas, mas com responsabilidade. Desenvolvido com React no frontend e FastAPI no backend, o projeto entrega piadas aleatórias direto de uma API que eu mesmo construí.</h2>
                    <h3 className="self-start"> Além de buscar piadas, o usuário pode:</h3>
                    <ul className="flex flex-col px-10 items-start list-disc">
                        <li>Adicionar sua própria piada</li>
                        <li>Denunciar piadas ofensivas ou abusivas</li>
                        <li>Piadas com mais de 4 denúncias são removidas automaticamente do banco de dados</li>
                    </ul>
                    <h2>Esse projeto foi uma ótima oportunidade de aplicar conceitos de CRUD, rotas protegidas, consumo de API própria e controle de conteúdo colaborativo. Um app simples, mas que une humor e moderação de forma prática e inteligente.</h2>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div className="md:hidden flex flex-col justify-center text-left items-start px-5 gap-5 text-xl">
                    <h2>Text Editor é um app de edição de texto desenvolvido com React no frontend e Golang no backend. A proposta é oferecer uma experiência de escrita fluida e intuitiva, com recursos modernos para criação de conteúdo.</h2>
                    <h3 className="self-start">Entre as funcionalidades, o app permite:</h3>
                    <ul className="flex flex-col px-10 items-start list-disc">
                        <li> Escrever e formatar textos livremente</li>
                        <li>Adicionar imagens</li>
                        <li>Usar títulos e seções com headlines</li>
                        <li>Login com autenticação via JWT</li>
                    </ul>
                    <h2>Com esse projeto, trabalhei desde o design da interface até a implementação da autenticação segura, controle de sessões e integração entre frontend e backend usando minha própria API em Go.</h2>
                </div>
                <div className="hidden md:flex flex-col justify-center text-left items-start px-32 gap-5 text-xl">
                    <h2>Text Editor é um app de edição de texto desenvolvido com React no frontend e Golang no backend. A proposta é oferecer uma experiência de escrita fluida e intuitiva, com recursos modernos para criação de conteúdo.</h2>
                    <h3 className="self-start"> Além de buscar piadas, o usuário pode:</h3>
                    <ul className="flex flex-col px-10 items-start list-disc">
                        <li> Escrever e formatar textos livremente</li>
                        <li>Adicionar imagens</li>
                        <li>Usar títulos e seções com headlines</li>
                        <li>Login com autenticação via JWT</li>    
                    </ul>
                    <h2>Com esse projeto, trabalhei desde o design da interface até a implementação da autenticação segura, controle de sessões e integração entre frontend e backend usando minha própria API em Go.</h2>
                </div>
            </>
        )
    }
}