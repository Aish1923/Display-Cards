import React from 'react';
import '../styles/CardDetails.scss';

function Card({ cardData }) {
    return (
        <div data-testid='card' className="p-card">
            <p style={{ "fontWeight": 400 }} className='p-heading--4'>CLOUD AND SERVER</p>
            <hr className="u-sv1" />
            <p className="p-card__content">
                {cardData?.featured_media && <img className="p-card__image" alt="Content" height="150" width="200" src={cardData.featured_media} />}
            </p>
            <a style={{ "fontWeight": 400 }} rel="noreferrer" name="title" target="_blank" className="p-heading--3" href={cardData._links.about[0].href}>{cardData?.title?.rendered && cardData.title.rendered}</a>
            <div className='author'>
                By {(cardData._links?.author[0]?.href && cardData?._embedded?.author[0]?.name) && <a name="author" rel="noreferrer" target="_blank" href={cardData._links.author[0].href}><i>{cardData._embedded.author[0].name}</i></a>} on&nbsp;
                {cardData?.date && new Date(cardData.date).toLocaleDateString('en-us', { day: "numeric", month: "long", year: "numeric" })}
            </div>
            <hr />
            {cardData?.type && <p className="p-heading--4">{cardData.type}</p>}
        </div>
    )
}

export default Card