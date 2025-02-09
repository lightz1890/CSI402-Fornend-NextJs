pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/lightz1890/CSI402-Fornend-NextJs.git'
        }

        stage('Build') {
            steps {
                show 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                show 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                show 'scp target/your-app.jar user@server:/path/to/deploy'
            }
        }
    }

    post {
        success {
            print 'Pipeline succeeded!'
        }
        failure {

            print 'Pipeline failed!'
        }
    }
}