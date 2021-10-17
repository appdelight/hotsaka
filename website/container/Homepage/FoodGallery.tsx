import React from 'react'
import Img from '../../components/Img'

const FoodGallery = () => {
    return (
        <React.Fragment>
            <div className="check_our_gallery">
                    <div className="grid_item_1">
                        <div className="top"></div>
                        <div className="bottom"></div>
                    </div>
                    <div className="grid_item_2 text-white text-center pt-5">
                            <i className="fancy__title">Gallery Food</i>
                            <h1>Checkout Our Gallery</h1>
                        <div className="d-flex align-items-center h-80">
                            <div className="carousel_contents d-flex">
                                <Img className="object-fit-cover g__img mx-5" src="/images/prawns.jpg" height="300px" width="400px" />
                                <Img className="object-fit-cover g__img mx-5" src="/images/big_chicken.jpg" height="300px" width="400px" />
                                <Img className="object-fit-cover g__img mx-5" src="/images/food.jpg" height="300px" width="400px" />
                                <Img className="object-fit-cover g__img mx-5" src="/images/thaali.jpg" height="300px" width="400px" />
                                <Img className="object-fit-cover g__img mx-5" src="/images/manchurian.jpg" height="300px" width="400px" />
                                <Img className="object-fit-cover g__img mx-5" src="/images/pizza.jpg" height="300px" width="400px" />
                                <Img className="object-fit-cover g__img mx-5" src="/images/banana_bread.jpg" height="300px" width="400px" />
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default FoodGallery
