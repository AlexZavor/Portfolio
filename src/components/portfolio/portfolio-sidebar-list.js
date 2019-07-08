import React from 'react';

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return(
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>
                <h2 className="title">{portfolioItem.name}</h2>
                <h3>{portfolioItem.id}</h3>
                <a onClick={() => props.handleDeleteClick(portfolioItem)}>
                    <i className="fas fa-trash-alt"></i>
                </a>
            </div>
        )
    })

    return (
        <div className="portfolio-sidebar-list-wrapper">
            {portfolioList}
        </div>
    );
}
export default PortfolioSidebarList;