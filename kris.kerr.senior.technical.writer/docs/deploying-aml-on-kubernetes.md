---
title: Deploying AML on Kubernetes
description: Instructions for deploying AML on Kubernetes
keywords:
    - installation
    - install
    - deploy
    - deploying
    - kubernetes
---

## Overview

AML is made up of 14 microservices that are packaged as Docker container images:
![AML microservices diagram](/img/aml-microservices-diagram.png "AML microservices diagram")

These container images are archived to Redpoint Global's private docker repository at https://cloud.docker.com/u/redpointglobal/repository/list.

## Minimum system requirements

- <font color="red">@@Rob, are there any minimum system requirements?@@</font>

## Installation prerequisites

### General

- A running Kubernetes cluster to which you can connect.
- A user account with:
  - Permissions to operate on the Kubernetes cluster.
  - Full access to the AML namespace in which AML will be deployed.
- A Docker Hub account.
  In order to pull the AML container images from the Redpoint AML repository in Docker Hub:
  - Create an account for your company on Docker Hub.
  - Give the account username to Redpoint support so they can grant you the permissions needed to pull the images from the Redpoint AML repository.
- A `.zip` file containing the YAML definition files for the AML application (these will be provided by Redpoint Support).
- A MongoDB database or CosmosDB account to which some of the AML microservices will connect (for state persistence and data storage).

### Software tools

- Git
  - Using BASH, not PowerShell or Windows Command Prompt.
  - https://git-scm.com/download
- `kubectl`
  - This version must be compatible with the Kubernetes cluster version.
  - https://kubernetes.io/docs/tasks/tools/install-kubectl/

## Secrets

- https://kubernetes.io/docs/concepts/configuration/secret/
- AML must connect to an external MongoDB or CosmosDB instance (recommended for production).
- AML container images are hosted in a private Docker repository.
- For these reasons, we will create Kubernetes secrets to store the MongoDB connection string and the Docker Hub login credentials in a secure manner.

The following table lists environment variables that should be stored as secrets and the container that needs the variables:

|Environment variables that should be stored as secrets  |Container that needs these variables |
--- | --- 
|`ml-servicesapi`<br />`ml-scheduler`<br />`dbapi`<br />`dcc-servicesapi`<br />`dcc-init`|`MONGODB_NAME`|
|`ml-servicesapi`<br />`ml-scheduler`<br />`dbapi`|`ADL2_ACCESS_KEY`|
|`ml-servicesapi`<br />`ml-scheduler`<br />`dbapi`|`S3_ACCESS_KEY`|
|`ml-servicesapi`<br />`ml-scheduler`<br />`dbapi`|`S3_SECRET_ACCESS_KEY`|
|`ml-servicesapi`<br />`ml-scheduler`<br />`dbapi`|`GCS_CREDENTIAL`|
|`ml-servicesapi`<br />`ml-scheduler`|`RPDM_PASS`|
|`ml-servicesapi`<br />`ml-scheduler`|`KEYCLOAK_ADMIN_PASS`|
|`dcc-servicesapi`<br />`dcc-init`|`RPI_SHARED_PASS`|
|`dcc-servicesapi`<br />`dcc-init`|`SMTP_PASS`|
|`dcc-init`|`DEFAULT_DCC_ADMIN_PASS`|

## Namespace
 - https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ 
 - It's good practice to deploy AML in its own namespace.
 - The namespace `aml` will be created for this purpose.
 - All AML components related to this installation will be deployed in this namespace.

## Deployments

 - https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
 - AML includes 14 deployment definitions (one for each microservice).

## Services

- https://kubernetes.io/docs/concepts/services-networking/service/
- AML includes 14 service definitions (one for each microservice).

## Ingress

- https://kubernetes.io/docs/concepts/services-networking/ingress/
- AML includes five ingress resource definitions (one ingress resource for each endpoint we need to expose outside the cluster).

## To deploy AML on Kubernetes

1. Connect to your Kubernetes cluster.
2. Download the AML Kubernetes YAML definitions from the Redpoint CDN.
    https://rpgcdnfiles.blob.core.windows.net/aml/kubernetes_manifests/kubernetes_manifests.zip
3. Extract the downloaded `.zip` file and navigate to the `Mercury` directory.  
    **Note:** Make sure you are in the `\kubernetes_manifests\Mercury` directory before executing the following `kubectl` commands.
4. Create a namespace for AML.   
    ```
    kubectl apply -f ./namespace/namespace.yaml
    ```
5. Edit the `aml-deploy-secrets.sh` file located in the `secrets` folder and replace the placeholder values with your own values. Once that is done, create the secrets.
    ```
    kubectl apply -f ./secrets/aml-deploy-secrets.sh
    ```
6. Create the AML services.
    ```
    kubectl apply -f ./services/
    ```
7. Create the AML deployments.
    ```
    kubectl apply -f ./deployments/
    ```
8. Create the Ingress resources.
    ```
    kubectl apply -f ./ingress/
    ```
9. Verify that all pods are executing.
    ```
    kubectl get all --namespace aml
    ```
10. Troubleshoot any errors and/or problems by checking the container logs and resolve them accordingly.

## Ingress controller

- At this point, AML is fully installed and executing in the Kubernetes cluster.
- In order for the Ingress resources we created to work, the cluster must have an executing Ingress controller.  
  - The Ingress controller receives incoming traffic and routes to the appropriate service using the rules we defined in the Ingress resources we created.  
  - This will expose the external endpoints required for the end users to access the UI and Admin pages.
- There are many implementations of the Kubernetes Ingress controller that you can read about [here](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/).
- The URL endpoints are composed of the load balancer IP + the path to the service:  
    
    |Kubernetes Ingress Controller Service |URL |
    --- | --- 
    |UI Login|`http://EXTERNAL-IP/#/Login`|
    |Admin Page|`http://EXTERNAL-IP/Admin/`|
    |Swagger docs|`http://EXTERNAL-IP/docs/`|
- TLS configuration is beyond the scope of this installation guide.

## Support

If you encounter any application-specific (non-Kubernetes) errors that you are unable to resolve, [contact us](getting-help) with the details.