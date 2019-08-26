import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer }
from "react-icons/fa";

import Title from "./Title";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: 'I got this locked since 91. I am the truest.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'I got this locked since 91. I am the truest.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'I got this locked since 91. I am the truest.'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'I got this locked since 91. I am the truest.'
            }

        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

