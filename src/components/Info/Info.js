import React from 'react';

import './Info.css'
import bg from './bg.png';

const Info = () => {
    return (
        <section className="info">
            <img className="info__image" src={ bg } alt=""/>
                <div className="info__text-container">
                    <h2 className="info__title">Заголовок</h2>
                    <p className="info__text">Платформа управления геопространственными
                        данными «Геопаспорт» — это инновационный продукт, представляющий собой набор программных решений
                        и позволяющий создавать современное прикладное программное обеспечение в области управления
                        данными территории или региона.
                    </p>
                    <p className="info__text">Программа включена в единый реестр российских программ для ЭВМ и баз
                        данных.</p>
                </div>
        </section>
    );
}

export default Info