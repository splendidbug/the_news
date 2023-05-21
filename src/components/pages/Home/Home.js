import {HomeCards} from './HomeCards';

const news_cards = [
    { link: '/link_of_news1', name: 'City Lights in New York', img: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F75b10e5f-6df4-48d8-b0f2-60ce510cd5c8.jpg?dpr=2&fit=scale-down&quality=medium&source=next&width=700', description: 'McCarthy says no progress on US debt talks until Biden is back from G7', day: '1', month: 'Jan', time:"6:00 AM"},
    { link: '/link_of_news2', name: 'news2', img: 'https://media.cnn.com/api/v1/images/stellar/prod/230520112823-bakhmut-capture-wagner-0520.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp', description: 'Russia’s Wagner claims to have captured Bakhmut but Ukraine says it still controls a part of it ', day: '7', month: 'May', time:"12:45 PM"},
    { link: '/link_of_news3', name: 'news3', img: 'https://www.reuters.com/resizer/x5TKPqW6HBsQ4iIG79B5JqasifA=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N6FCMWLPGRL6XA6LHX57BAM774.jpg', description: 'Transgender Mississippi girl misses graduation after judge\'s ruling', day: '7', month: 'Mar', time:"2:37 AM"},
    { link: '/link_of_news1', name: 'news1', img: 'https://www.reuters.com/resizer/gT-U_T5RXQ0uS8f5FOSkFqhJQQA=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SMDS3QTUH5O53FYA3W46X4HGLQ.jpg', description: 'India to withdraw 2,000-rupee notes from circulation', day: '1', month: 'Jan', time:"6:00 AM"},
    { link: '/link_of_news2', name: 'news2', img: 'https://startefacts.com/upload//upload/news/856751611745.webp', description: 'The Office: Dark Fan Theories That Actually Make Sense', day: '7', month: 'May', time:"12:45 PM"},
    { link: '/link_of_news3', name: 'news3', img: 'https://static01.nyt.com/images/2023/05/15/multimedia/00pronouns-01-lwbp/00pronouns-01-lwbp-superJumbo.jpg?quality=75&auto=webp', description: 'A University Fired 2 Employees for Including Their Pronouns in Emails', day: '7', month: 'Mar', time:"2:37 AM"},
    { link: '/link_of_news1', name: 'City Lights in New York', img: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F75b10e5f-6df4-48d8-b0f2-60ce510cd5c8.jpg?dpr=2&fit=scale-down&quality=medium&source=next&width=700', description: 'McCarthy says no progress on US debt talks until Biden is back from G7', day: '1', month: 'Jan', time:"6:00 AM"},
    { link: '/link_of_news2', name: 'news2', img: 'https://media.cnn.com/api/v1/images/stellar/prod/230520112823-bakhmut-capture-wagner-0520.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp', description: 'Russia’s Wagner claims to have captured Bakhmut but Ukraine says it still controls a part of it ', day: '7', month: 'May', time:"12:45 PM"},
    { link: '/link_of_news3', name: 'news3', img: 'https://www.reuters.com/resizer/x5TKPqW6HBsQ4iIG79B5JqasifA=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N6FCMWLPGRL6XA6LHX57BAM774.jpg', description: 'Transgender Mississippi girl misses graduation after judge\'s ruling', day: '7', month: 'Mar', time:"2:37 AM"},
    { link: '/link_of_news1', name: 'news1', img: 'https://www.reuters.com/resizer/gT-U_T5RXQ0uS8f5FOSkFqhJQQA=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SMDS3QTUH5O53FYA3W46X4HGLQ.jpg', description: 'India to withdraw 2,000-rupee notes from circulation', day: '1', month: 'Jan', time:"6:00 AM"},
    { link: '/link_of_news2', name: 'news2', img: 'https://startefacts.com/upload//upload/news/856751611745.webp', description: 'The Office: Dark Fan Theories That Actually Make Sense', day: '7', month: 'May', time:"12:45 PM"},
    { link: '/link_of_news3', name: 'news3', img: 'https://static01.nyt.com/images/2023/05/15/multimedia/00pronouns-01-lwbp/00pronouns-01-lwbp-superJumbo.jpg?quality=75&auto=webp', description: 'A University Fired 2 Employees for Including Their Pronouns in Emails', day: '7', month: 'Mar', time:"2:37 AM"},
  
  ]

export const Home = () => {
    return (
        /*<div><HomeCards {...news_cards}/></div>*/
        <div>
            <HomeCards news_data = {news_cards} type='Recommended for you'/>
        </div>
    )
}