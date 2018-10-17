import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "http://www.prescottlibrary.info/wp-content/uploads/2018/07/New-York-Times-Logo-300x300.jpg"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p><b>Summary:</b> {props.ingredients}</p>
          <p>Word Count: {props.wordcount}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>Take me to the link!</a>
        </Col>
      </Row>
    </Container>
  </li>
);
