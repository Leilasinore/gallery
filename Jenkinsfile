pipeline{
    agent any
    environment {
        NODE_VERSION = '22.12.0'
        RENDER_DEPLOY_HOOK = credentials('RENDER-DEPLOY-HOOK')
        RENDER_SITE_URL = "https://gallery-2f3n.onrender.com/"
    }
    tools{
        nodejs "NodeJS"
    }
    stages{
        stage("cloning repo"){
            steps{
             git branch: "master",url:"https://github.com/Leilasinore/gallery"
            }
        }
        stage("installing dependencies"){
            steps{
                echo 'installing dependencies'
                sh "npm install"
            }
        }
        stage("building"){
            steps{
                echo 'No build step needed for this project'
            }
        }
        stage("testing"){
            steps{
                echo 'testing'
                sh "npm test"
            }
            post {
                failure {
                    emailext (
                        subject: "Tests Failed #${env.BUILD_ID}",
                        body: "Tests Execution Failed ${env.BUILD_URL} ",
                        to: 'leilasinore@gmail.com'
                    )
                }
            }
        }
        stage("deploy"){
            
            steps{
                script{
                   echo 'Triggering deployment on render'
                   sh "curl -X POST ${RENDER_DEPLOY_HOOK}" 
                }
            }
            post {
        success {
            slackSend(
                channel: '#leila_ip1',
                message: """✅ Deployment Successful!
                Build ID: ${env.BUILD_ID}
                Render Site URL: ${RENDER_SITE_URL}"""
            )
        }
    }
        }
        
    }
}