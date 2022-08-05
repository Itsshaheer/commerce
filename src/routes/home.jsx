import Directory from '../directory';
import {Outlet} from 'react-router-dom'
const Home =() =>{
  const categories=[
    {
      id:1, title:'Hats',imageUrl: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1040A71PA2252PT32X42Y5D1036561117FS1593/views/1,width=378,height=378,appearanceId=71,backgroundColor=F2F2F2,modelId=1789,crop=list/ecommerce-for-life-online-seller-quote-gift.jpg"
    },
    {id:2, title:'Jackets', imageUrl: "https://images.squarespace-cdn.com/content/v1/528f8b33e4b01f2a315145b2/1501835422753-8ORYUBOL7EDPHA0E8Q5T/coat%403x.png?format=1500w"},
    {id:3, title:'Sneakers',  imageUrl: "https://cdn.shopify.com/s/files/1/2281/1461/products/Lima-Spearmint-1.jpg?v=1634270454"},
    {id:4, title:'Womens',   imageUrl: "https://channel-korea.com/wp-content/uploads/2021/11/Favorites-Ahra-6.jpg"},
    {id:5, title:'Mens',  imageUrl: "https://i.pinimg.com/736x/35/5e/d5/355ed562302ff793a41791e81b608def.jpg"}
  ]
  return (
    <div>  
    <Directory categories={categories} />
    <Outlet/></div>
   
  );
}
export default Home