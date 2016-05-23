package foo;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.junit.Assert;

/**
 * Created by mankar on 22/05/2016.
 */
public class TestSteps {

    @Given("^I add two numbers (\\d+) and (\\d+)$")
    public void i_add_two_numbers_and(int arg1, int arg2) {
        System.out.println(arg1+arg2);
    }

    @Given("^I verify sum is (\\d+)$")
    public void i_verify_sum_is(int arg1) {
        Assert.assertTrue(arg1==21);
    }

    @Given("^I subtract (\\d+) and (\\d+)$")
    public void i_subtract_and(int arg1, int arg2)  {
        System.out.println(arg1-arg2);
    }

}
