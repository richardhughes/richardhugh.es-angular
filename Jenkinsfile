pipeline {
  agent any
  stages {
    stage('Build Dependencies') {
      agent any
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