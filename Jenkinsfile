pipeline{
     agent any
    environment {
        NODE_VERSION = '22.12.0' 
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
        stage("building"){
            steps{
                sh "npm install"
            }
        }
    }
}
