import React, { Component } from "react";
import apples from "./img/apples.jpg";
import strawberries from "./img/strawberries.jpg";
import tomatoes from "./img/tomatoes.jpg";

export default class Cards extends Component {
  render() {
    let arr = [
      [
        apples,
        "apples",
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, debitis! Veniam recusandae assumenda excepturi facilis commodi! Possimus blanditiis ducimus assumenda?",
        "single-apple"
      ],
      [
        tomatoes,
        "tomatoes",
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, debitis! Veniam recusandae assumenda excepturi facilis commodi! Possimus blanditiis ducimus assumenda?",
        "single-tomato"
      ],
      [
        strawberries,
        "strawberries",
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, debitis! Veniam recusandae assumenda excepturi facilis commodi! Possimus blanditiis ducimus assumenda?",
        "single-strawberry"
      ]
    ];
    let sec = [];
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      sec.push(
        <div className="col-fl-md-4">
          <div className={element[3]}>
            <img
              className="img-fw"
              src={element[0]}
              aria-hidden
              alt="Image appear here."
            />
            <div className="text t-center t-light">
              <h2>{element[1]}</h2>
              <p>{element[2]}</p>
            </div>
          </div>
        </div>
      );
    }

    return sec;
  }
}
