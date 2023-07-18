import React from 'react'
import flipkartImage from './flipkart.png'; 

const Productdetails = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="product mt-5">
                        <div className="productsmallimg">
                            <img src={flipkartImage} alt='no img'/>
                            <img src={flipkartImage}  alt='no img'/>
                            <img src={flipkartImage} alt='no img'/>
                            <img src={flipkartImage}  alt='no img'/>
                            <img src={flipkartImage}  alt='no img'/>
                        </div>
                        <div className='productimgcontianer'>
                            <img src={flipkartImage} alt='productimgcontianer' />

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="productdetailstext ">
                        <div className="productcontant">
                            <p className='productbrand'>Brand:Apple</p>
                            <h2 className='producttitle'>Apple iphone 12 (white,64gb)</h2>
                            <div className='productreview'>
                                <span className='preview'>(4.6)</span>
                                <span ><i className="fa-solid fa-star"></i></span>
                            </div>
                                {/* <div className='reviewper'>(34444)</div> */}
                            <div className='price-box'>
                                <div className='price'>&#8377;15000</div>
                                <div className="cancleprice">
                                          <del className='dell'>&#8377;34,999</del> 
                                           </div>
                                           <div className='discountoffer'>
                                               14% off
                                 </div>
                            </div>
                            <div className='productdes'>
                                <div className='prod'>Description:</div>
                              <p>SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Productdetails