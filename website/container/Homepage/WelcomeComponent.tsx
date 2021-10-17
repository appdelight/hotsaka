import React from 'react'
import Img from '../../components/Img'

const WelcomeComponent = () => {
    return (
        <React.Fragment>
            <div className="welcome_container text-dark bg-white py-3">

            <div className="container text-dark my-5">
                    <div className="welcome_cont_main m-0">
                        <div className="w-60 part1">
                            <h2 className="py-4 fancy__title">Wellcome to SpicyDeli</h2>
                            <h2>
                                We are a modern Italian restaurant in the center
                                of the city
                            </h2>
                            <p className="welcome__desc">
                                We would like to take this opportunity to
                                welcome you to our restaurant. We guarantee you
                                the freshest food, delivered daily to our dock,
                                prepared to your liking. We can prepare a
                                specific meal by request. All our locations are
                                providing a wonderful open-air venue to enjoy
                                the meal all year round, we offer both indoor
                                and alfresco dining and our focus is on serving.
                            </p>
                            <Img
                                src="/images/food.jpg"
                                height="auto"
                                width="100%"
                            />
                        </div>
                        <div className="w-30 part2">
                            <Img
                                className="my-4 object-fit-cover"
                                src="/images/egg.jpg"
                                height="auto"
                                width="100%"
                            />
                            <div className="contacts">
                                <h3>Contacts</h3>
                                <div className="bg-dark p-4 text-white contact-text">
                                    8500, Lorem Street, Chicago, IL, 55030
                                    sales@yoursite.com (123) 456-78-90
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WelcomeComponent
