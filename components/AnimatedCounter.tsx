'use client' ;

import CountUp from 'react-countup'

const Animated = ({amount}: {amount:number})=> {
    return (
        <div>
            $<CountUp end={100}/>
        </div>

    )


}