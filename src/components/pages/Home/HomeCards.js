import './homeCards.css'

function handleMouseEnter(e){
    console.log();
}

export const HomeCards = ({news_data}) => {

    return(
        <div> 
            <div class='container'> {/*need to make this container scrollable*/}
                {news_data.map(news => {
                    return (
                        <div class='column'>
                            <div class='post-module' onMouseEnter={handleMouseEnter}>
                                <div class='thumbnail'>
                                    <div class='date'>
                                    <div class='day'>{news.day}</div>
                                    <div class='month'>{news.month}</div>
                                    </div>
                                    <img src={news.img}/>
                                </div>
                                <div class='post-content'>
                                    <h1 class='title'>{news.name}</h1>
                                    <h2 class='sub_title'>{news.name}</h2>
                                    <p class='description'>{news.description}</p>
                                    <div class='post-meta'>
                                        <span class='timestamp'>
                                            <i class='fa fa-clock-o'></i>
                                            {news.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>                
                    );
                })}  
                

            </div>
            
        </div>


    )
}   