export const HomeCards = ({news_data}) => {
    return (
        <div class="card">
            {news_data.map(news => {
                return (
                    <div class="card_body">
                        <p>{news.name}</p>
                        <img src={news.img}/>
                        <p>{news.description}</p>
                    </div>
                );
            })}
        </div>
    )
}