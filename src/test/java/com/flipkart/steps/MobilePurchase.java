package com.flipkart.steps;

import java.io.FileReader;
import java.io.FileWriter;
import java.util.List;
import java.util.Map;
import java.util.Set;


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;




public class MobilePurchase {
	
	 String names = "samsung mobiles";
	 String[] na = names.split(" ");
	 String name = na[0].toUpperCase();
	 
	 
	 static WebDriver driver;
		
		@Before
		public void beforScenario() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.get("chrome://settings/clearBrowserData");
		driver.findElement(By.xpath("//settings-ui")).sendKeys(Keys.ENTER);
		driver.get("https://www.flipkart.com/");
		driver.manage().window().maximize();

		}
		
		@After
		public void afterScenario() {
			driver.quit();
		}
	
	 @Given("user to login")
		public void user_to_login() {
			driver.findElement(By.xpath("//button[text()='✕']")).click();
		    
		}

		
		@When("user mobile search")
		public void user_mobile_search() {
			driver.findElement(By.xpath("//input[@type='text']")).sendKeys(names,Keys.ENTER);
			
		   	}

		@When("user select the mobile")
		public void user_select_the_mobile() throws Exception {
			Thread.sleep(3000);
			driver.findElement(By.xpath("(//div[contains(text(),'"+name+"')])[2]")).click();
			String parent = driver.getWindowHandle();
			Set<String> child = driver.getWindowHandles();
			for(String j:child) {
				if(!parent.equals(j)) {
					driver.switchTo().window(j);
				}
			}
			Thread.sleep(5000);
			WebElement mobilename = driver.findElement(By.xpath("//span[contains(text(),'"+name+"')]"));
			String namess = mobilename.getText();
			System.out.println(namess);
			
			Thread.sleep(3000);
			FileWriter f = new FileWriter("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Justin.txt");
			f.write(namess);
			f.close();
		}

		@When("user select add to card")
		public void user_select_add_to_card() {
			driver.findElement(By.xpath("//button[text()='ADD TO CART']")).click();
		    
		}
		
		@When("user checks the card")
		public void user_checks_the_card() throws Exception {
			Thread.sleep(3000);
			driver.navigate().back();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[text()='Cart']")).click();
			Thread.sleep(5000);
			WebElement cartnames= driver.findElement(By.xpath("//a[contains(text(),'"+name+"')]"));
			String cartname = cartnames.getText();
			System.out.println(cartname);
			Thread.sleep(5000);
			FileWriter f1 = new FileWriter("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Demo.txt");
			f1.write(cartname);
			f1.close();
		   
		}

		@Then("user verify that selected mobile is correct")
		public void user_verify_that_selected_mobile_is_correct() throws Exception {
			String s ="";
			String s1="";
			Thread.sleep(3000);
			FileReader f2 = new FileReader("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Justin.txt");
			char[] c= new char[50];
			f2.read(c);
			for(char j1:c) {
				s=s+j1;
			}
			System.out.println(s);
			
			Thread.sleep(2000);
			FileReader f3 = new FileReader("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Demo.txt");
			char[] c1= new char[50];
			f2.read(c1);
			for(char j2:c1) {
				s1=s1+j2;
			}
			System.out.println(s1);
			
		   Assert.assertEquals(s, s1);
		}
		
		@When("user mobile search by using one d list")
		public void user_mobile_search_by_using_one_d_list(DataTable dataTable) {
			List<String> li = dataTable.asList();
			names = li.get(1);
			driver.findElement(By.xpath("//input[@type='text']")).sendKeys(names,Keys.ENTER);
			
		}

		@When("user select the mobile by using one d list")
		public void user_select_the_mobile_by_using_one_d_list(DataTable dataTable) throws Exception {
			
			List<String> li1 = dataTable.asList();
			name = li1.get(1);
			
			Thread.sleep(3000);
			driver.findElement(By.xpath("(//div[contains(text(),'"+name+"')])[2]")).click();
			String parent = driver.getWindowHandle();
			Set<String> child = driver.getWindowHandles();
			for(String j:child) {
				if(!parent.equals(j)) {
					driver.switchTo().window(j);
				}
			}
			Thread.sleep(5000);
			WebElement mobilename = driver.findElement(By.xpath("//span[contains(text(),'"+name+"')]"));
			String namess = mobilename.getText();
			System.out.println(namess);
			
			Thread.sleep(3000);
			FileWriter f = new FileWriter("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Justin.txt");
			f.write(namess);
			f.close();
		   
		}

		@When("user mobile search by using one d map")
		public void user_mobile_search_by_using_one_d_map(DataTable dataTable) {
			Map<String, String> mp = dataTable.asMap(String.class, String.class);
			names = mp.get("phone3");
			
			driver.findElement(By.xpath("//input[@type='text']")).sendKeys(names,Keys.ENTER);
		   
		}

		@When("user select the mobile by using one d map")
		public void user_select_the_mobile_by_using_one_d_map(DataTable dataTable) throws Exception {
			Map<String, String> mp1 = dataTable.asMap(String.class, String.class);
			name =mp1.get("PHONE3");
			
			Thread.sleep(3000);
			driver.findElement(By.xpath("(//div[contains(text(),'"+name+"')])[2]")).click();
			String parent =driver.getWindowHandle();
			Set<String> child = driver.getWindowHandles();
			for(String j:child) {
				if(!parent.equals(j)) {
					driver.switchTo().window(j);
				}
			}
			Thread.sleep(5000);
			WebElement mobilename = driver.findElement(By.xpath("//span[contains(text(),'"+name+"')]"));
			String namess = mobilename.getText();
			System.out.println(namess);
			
			Thread.sleep(3000);
			FileWriter f = new FileWriter("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Justin.txt");
			f.write(namess);
			f.close();
		}

		@When("user mobile search {string}")
		public void user_mobile_search(String string) {
			names=string;
			
			driver.findElement(By.xpath("//input[@type='text']")).sendKeys(names,Keys.ENTER);
		   
		}

		@When("user select the mobile {string}")
		public void user_select_the_mobile(String string) throws Exception {
			
			name = string;
			
			Thread.sleep(3000);
			driver.findElement(By.xpath("(//div[contains(text(),'"+name+"')])[2]")).click();
			String parent = driver.getWindowHandle();
			Set<String> child = driver.getWindowHandles();
			for(String j:child) {
				if(!parent.equals(j)) {
					driver.switchTo().window(j);
				}
			}
			Thread.sleep(5000);
			WebElement mobilename = driver.findElement(By.xpath("//span[contains(text(),'"+name+"')]"));
			String namess = mobilename.getText();
			System.out.println(namess);
			
			Thread.sleep(3000);
			FileWriter f = new FileWriter("C:\\Users\\hp\\eclipse-workspace\\Cucumber1\\src\\test\\java\\com\\flipkart\\steps\\Justin.txt");
			f.write(namess);
			f.close();
		   
		}





	}

	
	
	 
	
