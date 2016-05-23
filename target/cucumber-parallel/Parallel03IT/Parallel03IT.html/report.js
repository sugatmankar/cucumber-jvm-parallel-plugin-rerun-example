$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/feature3.feature");
formatter.feature({
  "line": 1,
  "name": "Feature3",
  "description": "",
  "id": "feature3",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Generate Junit Runner for each feature file",
  "description": "",
  "id": "feature3;generate-junit-runner-for-each-feature-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@complete"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I subtract 20 and 10",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    },
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "TestSteps.i_subtract_and(int,int)"
});
formatter.result({
  "duration": 1925324422,
  "status": "passed"
});
});