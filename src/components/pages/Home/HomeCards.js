import React from 'react';
import './homeCards.css';


export const HomeCards = ({news_data, type})  => {

    return (
      <div className='main-container'>
        <p className='card-type'>{type}</p>
        <div className='card-container'>
          {news_data.map(news => {
            return (
              <div className='card'>
                <img src = {news.img} className='card-image' />
                <h2 className='news-name'>{news.name}</h2>
                <p className='card-desc'>{news.description}</p>
                <div className='date'>
                  <div className='day' style={{fontSize: 15 + 'px'}}>{news.day}</div>
                  <div className='month' style={{fontSize: 12 + 'px', textTransform: 'uppercase'}} >{news.month}</div>
                </div>
              </div>
            );
          })}  
        </div>
      </div>
      );
}