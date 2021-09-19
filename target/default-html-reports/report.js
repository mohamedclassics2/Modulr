$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "User Verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify valid credential login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Modulr homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.modulr.stepDefinitions.login_stepDefs.i_am_on_Modulr_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I use valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.modulr.stepDefinitions.login_stepDefs.i_use_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to login succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.modulr.stepDefinitions.login_stepDefs.i_should_be_able_to_login_succesfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});