import React, { useState } from 'react'
import "./Questions.css"
import Question from "./Question.js"
function Questions() {

    const expandableData = [{
        id: 1,
        title: 'Ce este HBO Max?',
        content: 'HBO Max este un nou serviciu de streaming, care-ți aduce cele mai fascinante povești de la Warner Bros, HBO, DC, Cartoon Network și multe altele, pentru prima dată într-un singur loc.'
    },
    {
        id: 2,
        title: 'Cum mă abonez la HBO Max?',
        content: 'Te vei putea abona la HBO Max imediat ce serviciul va fi lansat. Și îți oferim acces imediat la HBO Max dacă ești deja abonat HBO GO.'
    },
    {
        id: 3,
        title: 'Ce se va întâmpla cu abonamentul meu HBO GO?',
        content: 'Odată cu lansarea HBO Max pe 8 martie, contul tău HBO GO va deveni cont HBO Max. Așa că vei avea acces instant la HBO Max dacă ești deja abonat HBO GO. Un motiv în plus să îți creezi un cont HBO GO chiar acum!'
    },
    {
        id: 4,
        title: 'Ce se întâmplă dacă m-am abonat la HBO GO printr-un partener autorizat?',
        content: 'Dacă te-ai abonat la HBO GO printr-unul dintre partenerii noștri, contul tău va deveni HBO Max în momentul lansării. Partenerii noștri te vor contacta în curând pentru a-ți oferi toate detaliile.'
    },
    {
        id: 5,
        title: 'Când se va lansa HBO Max în România?',
        content: 'HBO Max va fi lansat în România pe 8 martie 2022.'
    },
    {
        id: 6,
        title: 'Ce se va întâmpla cu canalele de televiziune HBO?',
        content: 'Canalele TV HBO vor putea fi urmărite și după lansarea HBO Max. Dacă ai acces atât la un cont HBO GO, cât și la canalele de televiziune HBO, te poți bucura de întreaga ofertă HBO - și chiar mai mult! - începând cu 8 martie. Partenerii noștri îți vor da în curând toate detaliile în acest sens.'
    },
    {
        id: 7,
        title: 'Este nevoie să descarc o nouă aplicație în telefon?',
        content: 'Da. Odată cu lansarea HBO Max, aplicația HBO Go nu va mai funcționa și vei fi îndrumat să descarci noua aplicație HBO Max. Te așteaptă o mulțime de informații interesante!'
    },
    ];


    return (
        <div className="Questions">
            <h1>Întrebări despre HBO Max</h1>
            <div className="Questions__container">
                {expandableData.map(x => (
                    <Question
                        key={x.id}
                        content={x.content}
                        title={x.title}
                    />
                ))}
            </div>

        </div>

    )
}

export default Questions