import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Products() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        let componentMounted = true;
        const getProdcuts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                const data = await response.json();
                setData(data);
                setFilter(data);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProdcuts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3 my-3">

                    <div className="position-sticky" style={{ top: "100px" }}>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("electronics")}>Electronics</button>
                    </div>

                </div>

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"} />
                        </div>
                    </div>

                </div>


            </>
        )
    }

    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.category === category);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>


                <div className="button d-flex justify-content-center mb-5 pb-5" >
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>



                <div className="col-md-12 ">
                    <div className="row">
                        {filter.map((product) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                                    <div className="card h-100 text-center  p-4">
                                        <img src={product.image} class="card-img-top"  alt={product.title} height="250px" />
                                        <div className="m-3 mb-0">
                                            <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        </div>
                                        <div style={{ marginTop: "auto" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="m-3"><b>${product.price}</b></div>
                                                <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                    <button className="btn btn-me-2 border-primary">
                                                        <i className="fa fa-arrow-right text-muted"></i>Buy Now
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>


            </>
        )
    }

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr/>
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products