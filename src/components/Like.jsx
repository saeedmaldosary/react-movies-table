import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
  state = {};

  render() {
    var { onClick, liked } = this.props;
    return (
      <div>
        <FontAwesomeIcon
          onClick={onClick}
          icon={liked === true ? faHeartSolid : faHeartRegular}
        />
      </div>
    );
  }
}

export default Like;
