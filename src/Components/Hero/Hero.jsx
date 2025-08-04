import Astronauta from '../Astronauta/Astronauta'
import Gears from '../Gears/Gears'
import './hero.css'

export default function Hero(){
    return (
        <div className="hero">
            <div className="headline">
                <h1>Da ideia ao deploy — <br /> com <span className='style'>estilo  </span>e <span className='efenciality'>eficiência</span>.</h1>
                <h2>Front animado, back <span className='efenciality'>performático</span>.</h2>
            </div>
            <Gears />
            <Astronauta/>
        </div>
    )
}