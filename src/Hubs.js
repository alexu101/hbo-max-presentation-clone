import React from 'react'
import "./Hubs.css"
import hboLogo from "./pics/hbo-logo.png"
import cn from "./pics/cn.png"
import maxOriginals from "./pics/max-originals.png"
import dc from "./pics/dc.png"
import warnerBros from "./pics/warner-bros.png"
import { Link } from 'react-router-dom';

function Hubs() {


    return (
        <div className='Hubs'>
            <h1>HBO Max Hubs</h1>
            <div className="hubsRow1">
                <img src={hboLogo} />
                <img src={maxOriginals} />
                <img src={warnerBros} />
                <img src={dc} />
                <img src={cn} />
            </div>
            <h6>*Anumite titluri nu vor fi disponibile odata cu lansarea.</h6>
            <div className="links">
                <Link className='link' to='/lorem-ipsum'>POLITICĂ DE CONFIDENȚIALITATE</Link>
                <Link className='link' to='/lorem-ipsum'>NU ÎMI UTILIZA DATELE PERSONALE</Link>
                <Link className='link' to='/lorem-ipsum'>CONDIȚII DE UTILIZARE</Link>
            </div>

            <h6>©2022 HBO Europe s.r.o. All Rights Reserved. HBO Max™ is used under license.</h6>
        </div>
    )
}

export default Hubs