import React from 'react'
import logomain from "./Images/logo.png"

function Footer() {
    return (
        <>
            <div id='mainfooterdiv'>
                <img className='logoimgfooter' src={logomain} />
                <p className='letsgate'>Let's Get High</p>
                <div id='footpicdiv'>
                    <div className='follow'>Follow us on</div>
                    <img className='footpic' src='https://th.bing.com/th/id/OIP.x7tjGv9T8LxvJ0jVt7vFyQHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.3' alt='' />
                    <img className='footpic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6JfZxZl7Y7xGW-rrLR67ge7t8ZiewDJ2JA&usqp=CAU' alt='' />
                    <img className='footpic' src='data:image/png;base64,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' alt='' />
                    <img className='footpic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1y6zvrRRQmpYWCkT1UyFZhw7v0jIbyCTbg&usqp=CAU' alt='' />
                </div>

                <div className='emailenter'>
                    Enter Your Email to Subscribe
                </div>
            </div>

            <div className='footmaincard'>
                <div className='footmaincard1'>
                    <p className='colorchange'>Businesses</p> 
                    <p>Technology</p>
                    <p>Transport</p>
                    <p>Finance</p>
                    <p>E-Commerce</p>
                </div>

                <div className='footmaincard2'>
                    <p className='colorchange'>Community</p> 
                    <p>Education </p>
                    <p>Empowerment</p>
                    <p>Environment</p>
                    <p>Health</p>
                </div>

                <div className='footmaincard3'>
                    <p className='colorchange'>About</p> 
                    <p>Fonder</p>
                    <p>Chairman</p>
                    <p>Team</p>
                </div>

                <div className='footmaincard4'>
                    <p className='colorchange'>News</p> 
                    <p>Photos</p>
                    <p>Videos</p>
                    <p>News</p>
                    <p>Downloads</p>
                </div>
            </div>

            <div className='last'>@ 2019-2024 RedPhantom Industries Private Limited . All Rights Reserved.</div>

        </>
    )
}

export default Footer