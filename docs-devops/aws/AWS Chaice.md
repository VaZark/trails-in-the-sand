# Chalice

Chalice is python serverless framework provided by AWS

It can be used to deploy python scripts to AWS Lambdas. It also handles API Gateway and IAM role provisioning for the corresponding lambda + env (stage)

It allows developers to build quick python scripts that can be exposed as an API or pure lambdas to be used internal by the AWS applications.

It is simple and friendly to use and borrows from flask for basic routing and application setup.

Since it is an abstraction over lambdas, it provides a similar set of triggers, such as 

- scheduled event (cron / rate)
- SQS
- SNS Topics
- S3 events
- CloudWatch events
- Kinesis data stream
- DynamoDB stream

## Deployment and Packaging

It is by default deployed directly into the lambda with `chalice deploy`. However, it can also be integrated into CloudFormation by updating the stack

Reference: [Docs](https://aws.github.io/chalice/main.html)