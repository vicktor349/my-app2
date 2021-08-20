import React from 'react'
import './styles/Home.css'
import Data from './Data'
import Card from './Card'


const Home = () => {
    return (
        <div className="home-div">
            <div className="text-div">
                <span className="data-text">{Data.textCard1}</span>
                <br />
                <span className="data-text">{Data.textCard2}</span>
                <br />
                <span className="data-text">{Data.textCard3}</span>
                <br />
                <div className="view-details">
                    {Data.viewWorkCard}
                </div>
            </div>
            <div className="wrapper">
                <Card 
                title="Experience"
                preBody = 'TECHNOLOGIES WORKED WITH'
                body = {Data.tech1}
                />
                <Card 
                title="Experience"
                body ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                "
                />
                <Card 
                title="Experience"
                body ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at repellat laborum voluptas fuga. Magnam ipsum deserunt accusantium doloremque sunt minus voluptate repudiandae officia consequatur, laborum laboriosam quisquam reprehenderit voluptates.
                "
                />
            </div>
        </div>
    )
}

export default Home
