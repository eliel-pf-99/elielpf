import './background.css'

export default function Background(){

    const points_much = [];
    for(let i=0; i<1000; i++){
        points_much.push(i)
    }

    return (<div className='back'>
        {points_much.map((item) => (<div key={item} className='point'></div>))}
    </div>)
}