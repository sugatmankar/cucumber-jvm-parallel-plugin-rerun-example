# cucumber-jvm-parallel-plugin-rerun-example
Purpose : How to use cucumber-jvm-parallel-plugin

POM file with dependency and config as below :
```xml
<dependencies>
    <dependency>
        <groupId>com.github.temyers</groupId>
          <artifactId>cucumber-jvm-parallel-plugin</artifactId>
          <version>1.3.0-SNAPSHOT</version>
    </dependency>
</dependencies>     
<plugin>
  <groupId>com.github.temyers</groupId>
  <artifactId>cucumber-jvm-parallel-plugin</artifactId>
  <version>1.2.1</version>
  <executions>
    <execution>
      <id>generateRunners</id>
      <phase>validate</phase>
      <goals>
        <goal>generateRunners</goal>
      </goals>
      <configuration>
          <!-- Mandatory -->
          <!-- comma separated list of package names to scan for glue code -->
         <glue>foo, bar</glue>
         <!-- These are the default values -->
          <!-- Where to output the generated tests -->
           <outputDirectory>${project.build.directory}/generated-test-sources/cucumber</outputDirectory>
           <!-- The diectory, which must be in the root of the runtime classpath, containing your feature files.  -->
          <featuresDirectory>src/test/resources/features/</featuresDirectory>
           <!-- Directory where the cucumber report files shall be written  -->
          <cucumberOutputDir>target/cucumber-parallel</cucumberOutputDir>
          <!-- comma separated list of output formats. For JUnit Rerun json,html,rerun are mandatory-->
         <format>json,html,rerun</format>
         <!-- CucumberOptions.strict property -->
         <strict>true</strict>
         <!-- CucumberOptions.monochrome property -->
         <monochrome>true</monochrome>
         <!-- The tags to run, maps to CucumberOptions.tags property -->
         <tags>"@complete", "@accepted"</tags>
         <!-- If set to true, only feature files containing the required tags shall be generated. -->
         <!-- Excluded tags (~@notMe) are ignored. -->
         <filterFeaturesByTags>false</filterFeaturesByTags>
         <!-- Generate TestNG runners instead of JUnit ones. --> 
         <useTestNG>false</useTestNG>
         <!-- The naming scheme to use for the generated test classes.  One of 'simple' or 'feature-title' --> 
         <namingScheme>simple</namingScheme>
         <!-- The class naming pattern to use.  Only required/used if naming scheme is 'pattern'.-->
         <namingPattern>Parallel{c}IT</namingPattern>
         <!-- Generate JUnitReRun runners instead of JUnit and TestNG single runner. --> 
         <useJUnitReRun>true</useJUnitReRun>
         <!-- It is meaningless to keep reruning without looking for root cause of the failure. Test case/features/scenarios won't pass magically so you can use max 5 rerun. -->
               <retryCount>2</retryCount>
      </configuration>
    </execution>
  </executions>
</plugin>

surefire plugin with config as below : 

<plugin>
			    <groupId>org.apache.maven.plugins</groupId>
			    <artifactId>maven-surefire-plugin</artifactId>
			    <version>2.19</version>
			    <configuration>
					<additionalClasspathElements>
						<additionalClasspathElement>resources</additionalClasspathElement>
					</additionalClasspathElements>
			        <forkCount>5</forkCount>
			        <reuseForks>true</reuseForks>
			        <includes>
			            <include>**/*IT.class</include>
			        </includes>

			    </configuration>
			</plugin>


Configuration in above plugin :
<additionalClasspathElements>
						<additionalClasspathElement>resources</additionalClasspathElement>
</additionalClasspathElements>
```
is used to avoid No classpath: found in project setting as we are using template "classpath:path/to/feature/file.feature"


* Run `mvn clean verify` to run test.

You can see four IT files are generated in target/generated-test-sources. 
Once this execution finish corresponding runners result output will be created under target/cucumber-parallel/

For more detail visit https://github.com/temyers/cucumber-jvm-parallel-plugin.

