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
        }
        stage ('Deploy Dev') {
            sh "echo 'Deploying to DEV'"
            //sh "cd toyrnotus"
            sh "mvn -f toyrnotus/pom.xml deploy -Dmule.env='Development' -DskipTests=true -s toyrnotus/mvn-settings.xml"
           
            /*
            parallel 'static': {
                sh "echo 'shell scripts to run static tests...'"
            },
            'unit': {
                sh "echo 'shell scripts to run unit tests...'"
            },
            'integration': {
                sh "echo 'shell scripts to run integration tests...'"
            }
            */
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
     
        
    } catch (err) {
        currentBuild.result = 'FAILED'
        throw err
    }
}
