pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        sh '''npm install
ng test --watch=false --browsers=ChromeHeadless'''
      }
    }
  }
}