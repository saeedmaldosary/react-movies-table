import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
  state = {};

  render() {
    return (
      <div>
        <FontAwesomeIcon
          onClick={this.props.onClick}
          icon={this.props.liked === true ? faHeartSolid : faHeartRegular}
        />
      </div>
    );
  }
}

export default Like;
