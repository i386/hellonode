// JENKINS-38522
// JENKINS-37295

node {
  stage 'Build'
  checkout scm
  sh 'npm install'
  stage 'Test'
  sh 'sleep 5'
  stage 'Deploy'
  sh 'sleep 5'
}
