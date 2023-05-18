import './homeCards.css'

export const HomeCards = ({news_data}) => {
    /*return (
        <div class="card">
            {news_data.map(news => {
                return (
                    <div class="card_body">
                        <p>{news.name}</p>
                        <img src={news.img}/>
                        <p>{news.description}</p>
                        <p>{news.date}</p>
                        <p>{news.time}</p>
                    </div>
                );
            })}
        </div>
    )*/

    return(
        <div> {/*need to make a scrollable container to place the card containers*/}
            <div class='container'>
                <div class='column'>
                    <div class='post-module'>
                        <div class='thumbnail'>
                            <div class='date'>
                            <div class='day'>7</div>
                            <div class='month'>Mar</div>
                            </div>
                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'/>
                        </div>
                        <div class='post-content'>
                            <h1 class='title'>City Lights in New York</h1>
                            <h2 class='sub_title'>The city that never sleeps.</h2>
                            <p class='description'>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                            <div class='post-meta'>
                                <span class='timestamp'>
                                    <i class='fa fa-clock-o'></i>
                                    6 mins ago
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='column'>
                    <div class='post-module'>
                        <div class='thumbnail'>
                            <div class='date'>
                            <div class='day'>7</div>
                            <div class='month'>Mar</div>
                            </div>
                            <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg'/>
                        </div>
                        <div class='post-content'>
                            <h1 class='title'>City Lights in New York</h1>
                            <h2 class='sub_title'>The city that never sleeps.</h2>
                            <p class='description'>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                            <div class='post-meta'>
                                <span class='timestamp'>
                                    <i class='fa fa-clock-o'></i>
                                    6 mins ago
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>


    )
}   