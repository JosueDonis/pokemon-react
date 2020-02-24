import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex">
        <h1>Pokedex!</h1>
        <h1 className={this.props.isWinner ? 'pokedex-winner' : 'pokedex-loser'}>{this.props.isWinner ? "WINNER" : "LOSER"}</h1>
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="pokedex-card">
          {this.props.pokemon.map((p, i) => {
            return (
              <Pokecard
                key={i}
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
