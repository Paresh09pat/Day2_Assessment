import React from 'react'
import "./Styles.css"
import namelogo from "./Images/technov.jpg"
import cirimage from "./Images/cirimage.jpg"

function Section() {
    return (
        <div id="mainsecdiv">
            <div className='secdiv'>
                <div className='firstsecdiv'>
                    <p className='weare'><span className='W'>W</span>e Are Thinking Of A New Approach  <br /> To Your Current Methods</p>
                    <p className='exte'>
                        With RPTN's customer-centric digital experiences, businesses, co-workers, and the community may all climb to their respective positions. We are focused on cutting-edge new technologies such as nanotechnology, 5G, blockchain, cybersecurity, artificial intelligence, and others in order to enable digital transformation across end-to-end customer requirements. RPTN is a fast growing startup brand, want to be ranked among the top IT service providers in the globe. In order to improve the overall "Human Being"
                    </p>

                    <img className='technov' src={namelogo} alt='' />

                    <div className='imagidive'>IMAGINATION</div>
                </div>
                <div className='secondsecdiv'>
                    <img className='technov2' src={cirimage} alt='' />
                </div>   
            </div>

            <h1 className='alsoread'>Also Read</h1>
            <div className='secdiv2'>
                <div className='indexdiv1'>
                    <div className='indexdiv1sub'>
                        <h3 className='indexdiv1subhead'>RedPhantom <br /> Tech Novelty</h3>
                        <p className='indexdiv1subtext'>
                            For more than 40 years, RP Transportation provided safe,reliable <br />
                            reliable, affordable transportation services to cities, countries,<br />
                            municipalies, and other juridictiona entities, as well<br />
                            as private corporations, non-profit agencies,<br />
                            and community organizations.
                        </p>
                    </div>

                    <h1 className='onehash'>#1</h1>
                </div>
                <div className='indexdiv2'></div>
            </div>

            <div className='maincircle'>
                <p className='makecircle'></p>
                <p className='makecircle1'></p>
                <p className='makecircle'></p>
                <p className='makecircle'></p>
                <p className='makecircle'></p>
                <p className='makecircle'></p>
                <p className='makecircle'></p>
            </div>

            <div className='uppercard'>
                <h1 className='uppercardhead'> RedPhantom <br /> Tech Novelty</h1>
                <p className='uppercardtext' >
                    For more than 40 years, RP Transportation provided safe,reliable <br />
                    reliable, affordable transportation services to cities, countries,<br />
                    municipalies, and other juridictiona entities, as well<br />
                    as private corporations, non-profit agencies,<br />
                    and community organizations.
                </p>
                <p className='uppercardtext'>
                    For more than 40 years, RP Transportation provided safe,reliable <br />
                    reliable, affordable transportation services to cities, countries,<br />
                    municipalies, and other juridictiona entities, as well<br />
                    as private corporations, non-profit agencies,<br />
                    and community organizations.
                </p>
                <div className='sometext'>
                    <p className='sometext1'>READ MORE</p>
                    <p className='sometext2'> #rptechnovelty</p>
                </div>
            </div>

<div className='circlewitharrow'><span className='AC'>&#x2190;</span></div>
<div className='circlewitharrow1'> <span className='AC1'>&#x2192; </span></div>


        </div>
    )
}

export default Section