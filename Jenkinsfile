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
        
    } catch (err) {
        currentBuild.result = 'FAILED'
        throw err
    }
}
