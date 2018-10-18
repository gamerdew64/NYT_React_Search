import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    recipes: [],
    articleSearch: "",
    beginDate: "",
    endDate: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes({
      articleSearch: this.state.articleSearch,
      beginDate: this.state.beginDate,
      endDate: this.state.endDate
    })
      // .then(res => this.setState({ recipes: res.data.response.docs }))
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="articleSearch"
                        value={this.state.articleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Article Keyword to Search"
                      />
                      <Input
                        name="beginDate"
                        value={this.state.beginDate}
                        onChange={this.handleInputChange}
                        placeholder="Please enter a begin date (in YYYYMMDD format)"
                      />
                      <Input
                        name="endDate"
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                        placeholder="Please enter an end date (in YYYYMMDD format)"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Articles to Show</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(articleItem => {
                    return (
                      <RecipeListItem
                        key={articleItem._id}
                        title={articleItem.headline.main}
                        href={articleItem.web_url}
                        ingredients={articleItem.snippet}
                        thumbnail={articleItem.multimedia.url}
                        wordcount={articleItem.word_count}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
