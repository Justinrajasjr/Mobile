package com.flipkart.steps;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//resources//Features",
                     glue = "com.flipkart.steps",
                   plugin = "html:target",
               monochrome = true,
                   dryRun = false,
                    tags  = {"@smoke,@tv"})


public class TestRunner {

}
