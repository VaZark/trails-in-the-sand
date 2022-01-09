# Fundamentals

At the heart of AWS's **hosting** services are a select set of components that everything else is built around. They are,

1. Managed Services
   1. EC2 - Servers
   2. RDS - Databases
   3. Elasticache - Caching 
   4. SQS - AWS's custom Queuing service
   5. Lambdas & More - Serverless
   
2. Routing and Network management
   1. Route53 - DNS
   2. API Gateway
   3. VPC - Isolated Cloud Environments

3. Deployment & CI/CD Services
   1. CodeCommit - git repository
   2. CodeBuild - Build automation
   3. CodeDeploy - Build Installation on target server
   4. CodePipeline - CI/CD Workflow builder and trigger

4. Packaged Services
   1. Elastic Beanstalk - Application Deployment without managing server for targeted languages for multiple envs
   2. Lightsail - Simplified provisioning without bells and whistles
   3. Amplify - Hosting for mobile/web with low code style configuration 
   4. CloudFormation - Resource Management Automation


These are but the most basic services provided by AWS. It provides automation including lmage processing, /ML pipelines and so forth. These notes are not going to be an exhaustive overview/guide to AWS. Instead they are going to the opinionated summaries of my experiences, inferences and the workflow that I am comfortable with and I discover with time.