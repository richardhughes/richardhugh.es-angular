pipeline {
  agent any
  tools {nodejs "node"}
  
  stages {
    stage('Build Dependencies') {
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
