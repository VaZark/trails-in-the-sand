# Elastic Beanstalk

The core idea behind elastic beanstalk is to help application developers not worry about server setup (too much). It abstracts away server setup for popular web backend languages such as Java, python, Go etc.

It hosts the service on Amazon linux 2 and provides configuration for all of the standard deployment requirements such as

1. Env variables
2. DB Setup
3. VPC and Security Groups
4. Worker environments
5. Logs and Healthchecks
6. Autoscaling
7. Deployment options (Rolling/Blue-green/All at once/..)

It also allows developers to speciy config files that which can be used to associate additonalc AWS resources to it

## Provisioning additional resources 

Most non-trivial applications require additional resources, such as application secrets, caches, MQs, or even a config change in webserver

EB provides us with a variety of options to choose from using `options`, `container-commands`, `commands`