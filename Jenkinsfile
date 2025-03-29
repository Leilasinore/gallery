pipeline{
    agents any
    tools
    stages{
        stage("cloning repo"){
            steps{
             git branch: "master",url:"https://github.com/Leilasinore/gallery"
            }
        }
        stage("installing dependencies"){
            steps{
                sh "npm install"
            }
        }
        
    }
}
