node {
    // Clean workspace before doing anything
    deleteDir()

    try {
        stage ('Source') {
            git branch: "master", poll: true, url: 'https://github.com/mulesoft-redbull/ToyRNotUs.git'
        }
        stage ('Build') {
            sh "echo 'Building project'"
            sh "mvn -f toyrnotus/pom.xml clean package -s toyrnotus/mvn-settings.xml"
            junit "toyrnotus/target/surefire-reports/*.xml"
        }
        stage ('Deploy Dev') {
            sh "echo 'Deploying to DEV'"
            //sh "cd toyrnotus"
            try{
                sh "mvn -f toyrnotus/pom.xml deploy -Dmule.env='Development' -DskipTests=true -s toyrnotus/mvn-settings.xml"
            }catch(err){
                sh "mvn -f toyrnotus/pom.xml deploy -Dmule.env='Development' -DskipTests=true -s toyrnotus/mvn-settings.xml"
            }
        }
        stage ('API-test-dev') {
            sh "echo 'testing api on dev'"
            
            try{
                sh "newman run toyrnotus/src/test/resources/api-test-scripts/toysrnotus.postman_collection.json --reporters cli,junit"
                junit "newman/*.xml"
            }catch(err){
                currentBuild.result = 'UNSTABLE'
                junit "newman/*.xml"
                return
            }   
        }
        stage ('UI-test-dev') {
            sh "echo 'testing ui on dev'"
            
            try{
                sh "robot toyrnotus/src/test/resources/ui-test-scripts/toyrnotus.robot"
            }catch(err){
                currentBuild.result = 'UNSTABLE'
                //junit "output.xml"
                return
            }
            
        }
        stage ('Deploy Prod') {
            sh "echo 'Deploying to PROD'"
            
            try{
                sh "mvn -f toyrnotus/pom.xml deploy -Dmule.env='Production' -DskipTests=true -s toyrnotus/mvn-settings.xml"
            }catch(err){
                sh "mvn -f toyrnotus/pom.xml deploy -Dmule.env='Production' -DskipTests=true -s toyrnotus/mvn-settings.xml"
            }
        }
        
    } catch (err) {
        currentBuild.result = 'FAILED'
        junit "toyrnotus/target/surefire-reports/*.xml"
        throw err
    }
}
