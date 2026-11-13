//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here
router.get("/", function (req, res) {
  res.redirect("/start");
});

router.post("/experience-answer", function (req, res) {
  const experience = req.session.data["yearsOfExperience"];

  if (experience === "Less than 1 year" || experience === "None") {
    res.redirect("/ineligible");
  } else {
    res.redirect("/question-3");
  }
});
