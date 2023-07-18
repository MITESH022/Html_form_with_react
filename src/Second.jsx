import React, { useEffect, useState } from 'react'
// import flipkartImage from './flipkart.png'; 
const Second = () => {

        const [Product, setProduct] = useState([]);
        const [productdeta ,setproductdeta] = useState([]);
        const URL = `https://dummyjson.com/products`;

        useEffect(()=>{

                getproduct();
        },[]);


        const getproduct = async() =>{

            const res = await fetch(URL)
            const data = await res.json();
            // console.log(data.products);
            setProduct(data.products);
        }

        const truncateTitle = (title, maxLength) => {
            const words = title.split(' ');
            if (words.length <= maxLength) {
              return title;
            }
            const truncatedWords = words.slice(0, maxLength);
            return truncatedWords.join(' ') + '...';
          };

          const productdetails = async(id) =>{

            console.log(id);
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const productdata = await response.json();
            setproductdeta(productdata);
            console.log(productdeta);
            
            
        }
   
  return (
    <>
        <h1 className='text-center mt-2'>Flipkart Product</h1>
       
        <div className='container mt-2 mb-4'>
            <div className="row card-row">
            {

                Product.map((pro,index)=>(

                    <div className="col-md-2" key={index}>
                    <div className='card' onClick={()=>productdetails(pro.id)}>
                           <div className="card-padd">
                               <div className="card-body">
                                   <div className="card-img">
                                       <img src={pro.thumbnail} alt="noimag"/>
                                   </div>
                                   <div className="card-body">
                                       <div className="card-title">
                                       {/* POCO F5 5G (Snowstorm White, 256 GB) */}
   
                                       {truncateTitle(pro.description,10)}
                                       </div>
                                       <div className="card-reviewbox">
                                           <span className='card-review'>{pro.rating}<i class="fa-thin fa-star"></i></span>
                                           <span className='card-reviewnumber'>({pro.stock})</span>
                                       </div>
                                       <div className="card-pricebox">
                                           <div className="productprice">
                                           &#8377;{pro.price}
                                           </div>
                                           <div className="cancleprice">
                                          <del>&#8377;34,999</del> 
                                           </div>
                                           <div className='discountoffer'>
                                               {pro.discountPercentage}% off
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   
                   </div>


                )) }   
            </div>     
        </div>

    </>
  )
}

export default Second