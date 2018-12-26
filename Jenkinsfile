pipeline {
  agent any
  stages {
    stage('Build Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'ng test --watch=false --browsers=ChromeHeadless'
      }
    }
  }
}