pipeline {
  agent {
    node {
      label 'nodetest'
    }

  }
  stages {
    stage('Test') {
      parallel {
        stage('Build Dependencies') {
          steps {
            sh 'npm install'
          }
        }
        stage('Run Tests') {
          steps {
            sh 'ng test --watch=false --browsers=ChromeHeadless'
          }
        }
      }
    }
  }
}