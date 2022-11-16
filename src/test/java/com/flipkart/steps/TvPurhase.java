package com.flipkart.steps;

import java.io.FileWriter;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.When;

public class TvPurhase {
	
		String names ="sony tv";
		String[] na = names.split(" ");
		String name = na[0].toUpperCase();
		
		@When("user tv search")
		public void user_tv_search() {
			MobilePurchase.driver.findElement(By.xpath("//input[@type='text']")).sendKeys(names,Keys.ENTER);
			
		   	}
		
		@When("user select the tv")
		public void user_select_the_tv() throws Exception {
			Thread.sleep(3000);
			MobilePurchase.driver.findElement(By.xpath("(//div[contains(text(),'"+name+"')])[2]")).click();
			String parent = MobilePurchase.driver.getWindowHandle();
			Set<String> child = MobilePurchase.driver.getWindowHandles();
			for(String j:child) {
				if(!parent.equals(j)) {
					MobilePurchase.driver.switchTo().window(j);
				}
			}
			Thread.sleep(5000);
			WebElement mobilename = MobilePurchase.driver.findElement(By.xpath("//span[contains(text(),'"+name+"')]"));
			String namess = mobilename.getText();
			System.out.println(namess);
			
			Thread.sleep(3000);
			FileWriter f = new FileWriter("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Justin.txt");
			f.write(namess);
			f.close();
		}

		
	}
	
	
	
	


