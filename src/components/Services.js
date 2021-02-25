import React, { Component } from "react";
import { FaCocktail, FaHeart, FaShuttleVan, FaDiceD20 } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Happy Hour",
        info:
          "All week we offer all our guests the possibility of enjoying Happy Hour 2x1 (3pm-10pm)."
      },
      {
        icon: <FaHeart />,
        title: "Exercise Room",
        info:
          "Providing a first-rate luxury fitness experience extends beyond just the gym itself."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Want quick and easy access from your hotel to anywhere in the city?, We got you covered!"
      },
      {
        icon: <FaDiceD20 />,
        title: "Game Room",
        info:
          "A whole floor with board-game tables just for you. More than 100 board games available."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
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