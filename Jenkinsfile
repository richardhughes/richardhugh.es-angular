pipeline {
  agent any
  stages {
    stage('Build Dependencies') {
      agent {
        node {
          label 'NodeJS 10.0'
        }

      }
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'CHROME_BIN=/usr/bin/chromium-browser ng test --watch=false --browsers=ChromeHeadless'
      }
    }
  }
}