$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/feature1.feature");
formatter.feature({
  "line": 1,
  "name": "Feature1",
  "description": "",
  "id": "feature1",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Generate Junit Runner for each feature file",
  "description": "",
  "id": "feature1;generate-junit-runner-for-each-feature-file",
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
  "name": "I add two numbers 11 and 20",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify sum is 21",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 18
    },
    {
      "val": "20",
      "offset": 25
    }
  ],
  "location": "TestSteps.i_add_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 1913257524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 16
    }
  ],
  "location": "TestSteps.i_verify_sum_is(int)"
});
formatter.result({
  "duration": 329503,
  "status": "passed"
});
});