public class Test{
 
 public static void main(String args[]){
 
 List<String> arguments = new ArrayList<String>();
        arguments.add("classpath:resources/features");
        String[] tags = {"@test1,@test2,@test3"};
        for (String tag : tags) {
            arguments.add("--tags");
            arguments.add(tag);
        }
        arguments.add("--plugin");
        arguments.add("html:target/cucumberHTMLReport");
        arguments.add("--plugin");
        arguments.add("json:target/cucumberJSONReport");
        arguments.add("--plugin");
        arguments.add("rerun:target/failedTest.txt");
        String[] gluepackages = "com.org.sugat.steps,org.sugat.zyz.steps".split(",");
        for (String packages : gluepackages) {
            if (!packages.contains("none")) {
                arguments.add("--glue");
                arguments.add(packages);
            }
        }
        final String[] argv = arguments.toArray(new String[0]);
        cucumber.api.cli.Main.run(argv,Test.class.getClassLoader());

 
 }

}
