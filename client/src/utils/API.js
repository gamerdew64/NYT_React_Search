// ********************************************************************************
// ********************************************************************************

import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/recipes", { params: { q: query } });
//   }
export default {
  getRecipes: function(data) {
    return axios.get("/api/recipes", { params: {
      q: data.articleSearch,
      beginDate: data.beginDate,
      endDate: data.endDate
    } });
  }

};

// ********************************************************************************
// ********************************************************************************



//
// import axios from "axios";
//
// const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// // This was the API key that was used back in our "06-ajax" work when we first used the NYT API
// const APIKEY   = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// // There are some issues with the default url syntax (BASEURL) due to where the API key (APIKEY) needs to be inserted in the URL. This line was added to add this text after the URL and the key so that the queries will work.
// const queryFix = "&q=";
//
// // The getRecipes method retrieves recipes from the server
// // It accepts a "query" or term to search the recipe api for
//
// const API = {
//   // Retrieves all articles from the db
//   getRecipes: function() {
//     return axios.get(process.env.REACT_APP_API_HOST + "/api/recipes");
//   },
//   search: function(query) {
//   	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
//     return axios.get(BASEURL + APIKEY + queryFix + query);
//   }
// };
//
// export default API;
//
//
//








// import axios from "axios";
//
// const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
// const APIKEY   = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// const queryFix = "&q=";
//
// const API = {
//   // Retrieves all articles from the db
//   getArticles: function() {
//     return axios.get(process.env.REACT_APP_API_HOST + "/api/articles");
//   },
//   // Saves a new article to the db
//   saveArticle: function(article) {
//     return axios.post(process.env.REACT_APP_API_HOST + "/api/articles", { article });
//   },
//   // Deletes an article from the db
//   deleteArticle: function(id) {
//     console.log('in API delete article ')
//     return axios.delete(process.env.REACT_APP_API_HOST + `/api/articles/${id}`);
//   },
//   // Toggles an article's favorite property in the db
//   favoriteArticle: function(article) {
//     article.favorited = !article.favorited;
//     const { _id, favorited } = article;
//     return axios.patch(process.env.REACT_APP_API_HOST + `/api/articles/${_id}`, { favorited });
//   },
//   search: function(query) {
//   	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
//     return axios.get(BASEURL + APIKEY + queryFix + query);
//   }
// };
//
// export default API;
