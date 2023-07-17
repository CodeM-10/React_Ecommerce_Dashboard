import './Container.css'
import '../global.css'

import {Footer,Header} from '../index';

const Container = ()=>{
    return(
            <div className='contain  '>
            <Header />
                <div className='container bg-light'>
                    <h1 >table</h1>
                    <h1 >order analytics</h1>
                    <h1 >order list</h1>
                </div>

            <Footer />
            </div>
        
    )
}

export default Container;