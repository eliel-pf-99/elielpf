import ContactIem from "./contactItem";

function Contact(){
    return (
            <div className="flex relative min-h-dvh flex-col justify-center text-center items-center px-32 gap-5 text-xl">
                <h2 className="md:absolute w-screen md:w-xl text-left md:px-8 px-5 text-xl top-15 left-15 uppercase font-bold">Bora trocar uma ideia!</h2>
                <div className="flex md:flex-row flex-col gap-15">
                    <ContactIem title="E-mail" content="elie.dev.99@gmail.com" btnTitle="mail to" link="mailto:eliel.dev.99@gmail.com" />
                    <ContactIem title="WhatsApp" content="+55 (41) 99570-4843" btnTitle="enviar mensagem" link="https://wa.me/5541991762993" />
                    <ContactIem title="LinkedIn" content="/elielpereiraf99" btnTitle="ver perfil" link="https://www.linkedin.com/in/elielpereiraf99/" />
                </div>
            </div>
    )
}

export default Contact;