const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        q: req.query.q
      }
    })
    .then(({ data }) => {
      console.log(data.response.docs);
      res.json(data.response.docs);
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

module.exports = router;

// const axios = require("axios");
// const router = require("express").Router();
//
// const APIKEY   = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
//
// router.get("/recipes", (req, res) => {
//   axios
//     .get("https://api.nytimes.com/svc/search/v2/articlesearch.json")
//     // .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: req.query })
//     .then((results) => res.json(JSON.stringify(results)))
//     .catch(err => res.status(422).json(err));
// });
//
// module.exports = router;
