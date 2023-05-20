import {HomeCards} from './HomeCards';

const news_cards = [
    { link: '/link_of_news1', name: 'news1', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Potrait.png', description: 'This is sample description of the first news', day: '1', month: 'Jan', time:"6:00 AM"},
    { link: '/link_of_news2', name: 'news2', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Rahul_Gandhi.jpg/330px-Rahul_Gandhi.jpg', description: 'This is sample description of the second news', day: '7', month: 'May', time:"12:45 PM"},
    { link: '/link_of_news3', name: 'news3', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sonia_Gandhi_2019.jpg/330px-Sonia_Gandhi_2019.jpg', description: 'This is sample description of the third news', day: '7', month: 'Mar', time:"2:37 AM"}
]

export const Home = () => {
    return (
        /*<div><HomeCards {...news_cards}/></div>*/
        <div>
            <HomeCards news_data = {news_cards}/>
        </div>
    )
}