pipeline{
    agent any
    environment {
        NODE_VERSION = '22.12.0'
        RENDER_DEPLOY_HOOK = credentials('RENDER-DEPLOY-HOOK')
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
        stage("deploy"){
            
            steps{
                script{
                   echo 'Triggering deployment on render'
                   sh "curl -X POST ${RENDER_DEPLOY_HOOK}" 
                }
            }
        }
        
    }
}