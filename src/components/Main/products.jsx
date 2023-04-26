import React, { Component } from 'react';
import product_1 from "./Img/product-1.png"
import product_2 from "./Img/product-2.png"
import sheep from "./Img/sheep.png"
import chicken from "./Img/chicken.png"
import bull from "./Img/bull.png"
import position_1 from "./Img/position_1.png"
import position_2 from "./Img/position_2.png"
import "./style/mainProduct.css"

class mainProducts extends Component {
    render() {
        return (
            <div className='products'>
                <div className="products-header">
                    <h1>Products</h1>
                </div>
                <div className="products-block">
                    <div className="product-img w-50">
                        <img src={product_1} alt="" />
                    </div>
                    <div className="product-text w-50">
                        <h1>Advantages of our Products</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque sequi laboriosam, tenetur libero ducimus vitae esse sapiente debitis quos dignissimos consequatur distinctio. Fugit maxime ipsum iusto excepturi dolores asperiores repellendus nemo. Exercitationem, omnis laborum officiis a ratione iusto ducimus obcaecati sequi in quo assumenda dolore. Libero neque consequuntur
                        </p>
                        <button className='btn btn-outline-light'>Learn More {'->'}</button>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="products-block">
                    <div className="product-text w-50 d-flex justify-content-end flex-wrap">
                        <h1>Our flours</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque sequi laboriosam, tenetur libero ducimus vitae esse sapiente debitis quos dignissimos consequatur distinctio. Fugit maxime ipsum iusto excepturi dolores asperiores repellendus nemo. Exercitationem, omnis laborum officiis a ratione iusto ducimus obcaecati sequi in quo assumenda dolore. Libero neque consequuntur
                        </p>
                        <button className='btn btn-outline-light'>Learn More {'->'}</button>
                    </div>
                    <div className="product-img w-50">
                        <img src={product_2} alt="" />
                    </div>

                </div>
                <div className="hr"></div>
                <div className="products-block">
                    <div className="product-img w-50 d-flex justify-content-evenly flex-wrap">
                        <img src={sheep} alt="" className='w-25' />
                        <div className='w-100'></div>
                        <img src={bull} alt="" className='w-25' />
                        <img src={chicken} alt="" className='w-25' />

                    </div>
                    <div className="product-text w-50">
                        <h1>Parvazprof Industrial & Production Company</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque sequi laboriosam, tenetur libero ducimus vitae esse sapiente debitis quos dignissimos consequatur distinctio. Fugit maxime ipsum iusto excepturi dolores asperiores repellendus nemo. Exercitationem, omnis laborum officiis a ratione iusto ducimus obcaecati sequi in quo assumenda dolore. Libero neque consequuntur
                        </p>
                        <button className='btn btn-outline-light'>Learn More {'->'}</button>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="products-block">
                    <div className="product-text w-50 d-flex justify-content-end flex-wrap">
                        <h1>Other Products</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque sequi laboriosam, tenetur libero ducimus vitae esse sapiente debitis quos dignissimos consequatur distinctio. Fugit maxime ipsum iusto excepturi dolores asperiores repellendus nemo. Exercitationem, omnis laborum officiis a ratione iusto ducimus obcaecati sequi in quo assumenda dolore. Libero neque consequuntur
                        </p>
                        <button className='btn btn-outline-light'>Learn More {'->'}</button>
                    </div>
                    <div className="product-img w-50">
                        <div className='positon-img'>
                        <img src={position_1} alt="" />
                        <img src={position_2} alt="" />
                        <img src={position_2} alt="" />
                        </div>
                    </div>

                </div>
                <div className="hr"></div>
            </div>
        );
    }
}

export default mainProducts;
