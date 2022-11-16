$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Mobile.feature");
formatter.feature({
  "name": "Mobile",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user to login",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user mobile search by using one d list",
  "rows": [
    {
      "cells": [
        "samsung mobiles",
        "redmi mobiles",
        "vivo mobiles"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_mobile_search_by_using_one_d_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the mobile by using one d list",
  "rows": [
    {
      "cells": [
        "SAMSUNG",
        "REDMI",
        "VIVO"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_the_mobile_by_using_one_d_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select add to card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_add_to_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks the card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_checks_the_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify that selected mobile is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_verify_that_selected_mobile_is_correct()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[REDMI 9i Sport (Metallic Blue, 64 GB)  (4 GB RAM)]\u0000\u003e but was:\u003c[\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000]\u0000\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.flipkart.steps.MobilePurchase.user_verify_that_selected_mobile_is_correct(MobilePurchase.java:134)\r\n\tat ✽.user verify that selected mobile is correct(src/test/resources/Features/Mobile.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Mobile Purchase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user mobile search \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user select the mobile \"\u003cphone name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user select add to card",
  "keyword": "And "
});
formatter.step({
  "name": "user checks the card",
  "keyword": "And "
});
formatter.step({
  "name": "user verify that selected mobile is correct",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "phone",
        "phone name"
      ]
    },
    {
      "cells": [
        "samsung mobiles",
        "SAMSUNG"
      ]
    },
    {
      "cells": [
        "redmi mobiles",
        "REDMI"
      ]
    },
    {
      "cells": [
        "vivo mobiles",
        "vivo"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user to login",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user mobile search \"samsung mobiles\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_mobile_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the mobile \"SAMSUNG\"",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_the_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select add to card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_add_to_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks the card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_checks_the_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify that selected mobile is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_verify_that_selected_mobile_is_correct()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[SAMSUNG Galaxy F22 (Denim Blue, 64 GB)  (4 GB RAM)]\u003e but was:\u003c[\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.flipkart.steps.MobilePurchase.user_verify_that_selected_mobile_is_correct(MobilePurchase.java:134)\r\n\tat ✽.user verify that selected mobile is correct(src/test/resources/Features/Mobile.feature:46)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user to login",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user mobile search \"redmi mobiles\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_mobile_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the mobile \"REDMI\"",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_the_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select add to card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_add_to_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks the card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_checks_the_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify that selected mobile is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_verify_that_selected_mobile_is_correct()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[REDMI 9i Sport (Metallic Blue, 64 GB)  (4 GB RAM)]\u0000\u003e but was:\u003c[\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000]\u0000\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.flipkart.steps.MobilePurchase.user_verify_that_selected_mobile_is_correct(MobilePurchase.java:134)\r\n\tat ✽.user verify that selected mobile is correct(src/test/resources/Features/Mobile.feature:46)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user to login",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mobile Purchase",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user mobile search \"vivo mobiles\"",
  "keyword": "When "
});
formatter.match({
  "location": "MobilePurchase.user_mobile_search(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the mobile \"vivo\"",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_the_mobile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select add to card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_add_to_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks the card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_checks_the_card()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify that selected mobile is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "MobilePurchase.user_verify_that_selected_mobile_is_correct()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[vivo T1 44W (Starry Sky, 128 GB)  (4 GB RAM)]\u0000\u0000\u0000\u0000\u0000\u0000\u003e but was:\u003c[\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000]\u0000\u0000\u0000\u0000\u0000\u0000\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.flipkart.steps.MobilePurchase.user_verify_that_selected_mobile_is_correct(MobilePurchase.java:134)\r\n\tat ✽.user verify that selected mobile is correct(src/test/resources/Features/Mobile.feature:46)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Tv.feature");
formatter.feature({
  "name": "Tv",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tv"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user to login",
  "keyword": "Given "
});
formatter.match({
  "location": "MobilePurchase.user_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tv Purchase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tv"
    }
  ]
});
formatter.step({
  "name": "user tv search",
  "keyword": "When "
});
formatter.match({
  "location": "TvPurhase.user_tv_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the tv",
  "keyword": "And "
});
formatter.match({
  "location": "TvPurhase.user_select_the_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select add to card",
  "keyword": "And "
});
formatter.match({
  "location": "MobilePurchase.user_select_add_to_card()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});