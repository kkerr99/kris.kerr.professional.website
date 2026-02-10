---
title: Deploying rgOne on a single Linux VM
description: How to deploy rgOne on a single Linux VM
keywords:
    - installation
    - install
    - deploy
    - deploying
    - linux
    - vm
---

## Overview

rgOne works best when deployed onto a multi-node cluster (either a Swarm or Kubernetes cluster). In this installation, we are installing on a single-node cluster.

## Minimum system requirements

With all of rgOne installed on one node, the minimum system requirements are:

### OS

- We recommend Ubuntu Linux 16.04 or 18.04.
    - Compatible with any OS supported by Docker [here](https://mirantis.my.salesforce.com/?ec=302&startURL=%2Farticles%2FSolution_From_Ticket%2Fcompatibility-matrix).
- 16 GB memory
- 4 CPUs

### Ports

If this Linux VM is hosted externally, make sure the following ports are accessible:

|Port |Description |
--- | --- 
|22|For SSH access to install app.|
|8983|https port for web browser access to main app.|
|8993|https port for web browser access to admin app.|
|8930|Socket IO service used to push real-time notifications back to web browser.|

API developers will likely want access to the Swagger UI. Open these ports for Swagger UI access:

|Port |Description |
--- | --- 
|8913|Machine Learning endpoints|
|8903|Framework endpoints (user management, authentication, and so on)|

## Installation prerequisites

### Obtain a Docker account  
- rgOne is packaged as a set of Docker container images that are archived in a [Redpoint Global Docker repository](https://cloud.docker.com/u/redpointglobal/repository/list).
- You will need an account on [Docker](https://cloud.docker.com/) to access these images.

### Request rgOne app licenses from Redpoint support 
- From Redpoint support, request Mercury-rgOne app licenses for the apps you have purchased. If this is for a time-limited POC, be sure to specify in the request for how long the key should remain valid.
- Support will send you one or more activation key(s) that look something like this:  
    ```
    AKNK070404G1H1J18M1Z331P6KGYFCUTN2
    ```
- Save the key(s), you will need to enter them in your app Admin pages.

### Create an [account](https://cloud.docker.com/) get access to rgOne. 
    
Once you have created an [account](https://cloud.docker.com/), contact your Redpoint representative to grant your account access to the rgOne apps you purchased.

### Verify that Docker has been installed  
    
- In your OS shell, run this command:  
    ```
    docker --version
    ```
- Most Linux VMs require that you execute Docker commands as `sudo`, so you may need to enter the command as such:  
    ```
    sudo docker --version
    ```
- The displayed Docker version should be `18.06.0-ce` (or higher).

### Install or update Docker (if necessary)
    
1. If Docker (or the correct version of Docker) is not installed, execute the [installer](https://docs.docker.com/install/linux/docker-ce/ubuntu/).
2. Make sure you can log in to the Docker repo by running this in your OS shell:  
    ```
    sudo docker login -u docker_username -p docker_password
    ```
    - If you get an error that looks like:  
        ```
        Error saving credentials: error storing credentials
        ```
        You need to install additional packages in your Linux VM.  Do this by running the following command in your OS shell:  
        ```
        sudo apt install gnupg2 pass
        ```

3. Initialize Docker swarm mode
    
    Initialize this single-node cluster by running this command in your OS shell:
    ```
    sudo docker swarm init
    ```
    
    If you have a system with multiple active IP addresses, you may get an error:
    ```
    Error response from daemon: could not choose an IP address to advertise since this system has multiple addresses on different interfaces (10.0.2.15 on eth0 and 192.168.99.100 on eth1) - specify one with --advertise-addr
    ```
    
    In this case, rerun Docker swarm and choose one of the addresses:
    ```
    sudo docker swarm init --advertise-addr 10.0.2.15
    ```
    
    If you must specify an address, you will reuse this address (instead of using "localhost") when connecting to the rgOne addresses in the section [To Install rgOne locally](#to-install-rgone-locally).

### If linking AML with DM for Data Connections (OPTIONAL)
    
- If you want to link AML with DM in order to enable DM-based Data Connections, you need to install the following software:
        
    |Software |Version (minimum) |
    --- | --- 
    |Redpoint DM|9.1.3.2422|

## To install rgOne locally

### Download rgOne deployment package
    
- This package file includes:
    - The primary service deployment script `deploy_service_to_node.sh` that generates the final Docker compose file and deploys to the target system(s).
    - The set of templates (`SERVICE.template`) for the various Docker service configurations. These templates are combined during deployment to create the final Docker compose file (that is needed to deploy the containers).
- To download an installer to your local Linux system, use one of the following Linux tools from your OS shell (where `X.Y` is the version information):
    ```
    curl https://cdn.redpointglobal.com./aml/redpoint_dcc-v6.X.Y.tgz -o redpoint_dcc-v6.X.Y.tgz
    ```
    or
    ```
    wget https://cdn.redpointglobal.com./aml/redpoint_dcc-v6.X.Y.tgz -O redpoint_dcc-v6.X.Y.tgz
    ```
    Contact [DM support](getting-help) or pre-sales support for download information.
- **Note:** The `deploy_service_to_node.sh` script displays each Docker command as it executes it, which allows you to see how Docker is utilized (and may aid you in building new scripts). The deploy script has several functions that assist with managing rgOne services.

### Unpack the ZIP/tarball file
    
- On Linux, you can unpack the `.tgz` file using this command in your OS shell:
    ```
    tar -zxf redpoint_dcc-vX.tgz
    ```
- Unpacking the ZIP/tarball file creates the directory:
    ```
    redpoint_dcc
    ```

### Create a default administrator account
    
- The deployment script creates a default administrator account named `admin`, with the password `.RedPoint123`. This account is granted both app admin and system admin privileges.
- Use the following deployment options to change the name or password for the default administrator account:
    ```
    --admin-user USERNAME
    --admin-pass PASSWORD
    ```
- If you prefer that no administrator account be created during deployment, use the following deployment option:
    ```
    --create-admin-user no
    ```

### Configure SMTP
    
- If you want to enable user password resets via email, you need to specify the SMTP host with the following option in the `deploy_service_to_node.sh` command:
    ```
    --smtp-host SMTP.HOST.com
    ```

### Run the deployment script
    
- You must use quotation marks around `db_connection_string` and around any passwords because special characters in either string cause an error when processing the Bash command line.
- If using MongoDB, it must have authorization enabled and the connection string must contain a user/password for an admin user with admin access for managing/creating tables. For example:
    ```
    --mongodb mongodb://admin:redpoint@mongohost:27017"
    ```

1. Change the directory to `redpoint_dcc`:
    ```
    cd /PATH/TO/redpoint_dcc
    ```
2.  Deploy rgOne to the local host:
    ```
    sudo ./deploy_service_to_node.sh --cmd install --type dcc --type trainer --type predictor --registry-user DOCKER_USERNAME --registry-pass "DOCKER_PASSWORD" --constraint manager
    ```
    - The DOCKER_USERNAME string is the username chosen when you [create an account](https://cloud.docker.com/).
    - If this is a multi-node swarm cluster and not a single-node VM, you can omit `--constraint manager`. rgOne will deploy across all nodes in the cluster, taking advantage of the entire swarm.
    - The `--constraint manager` flag deploys the Mercury services only onto the swarm manager node (which is the only node you have in a single node deployment).
    - If you are using an external MongoDB instance or a CosmosDB instance (recommended for production or POC deployments), add the MongoDB/CosmosDB connection string options to the deployment command:
        - If MongoDB instance:
            ```
            --mongodb "DB_CONNECTION_STRING"
            ```
        - If CosmosDB instance:
            ```
            --mongodb "DB_CONNECTION_STRING" --dbtype COSMOS_PARTITIONED
            ```
    - If you do not provide an external database connection, Mercury automatically creates a local MongoDB instance to use. This option is great for short-term tests or POC, but the local MongoDB instance does not have high availability or backups. If anything happens to the VM where this is deployed, data from the local database will be lost. We highly recommend using an external database connection.
    - If you want to  link AML with DM in order to enable DM-based Data Connections, add the following options to the deployment command:
        ```
        --rpdm-enabled {yes|no} --rpdm-host HOST/IP --rpdm-user username --rpdm-pass PASSWORD --rpdm-temp-dir DIRECTORY --rpdm-ml-uri uri
        ```
        |Deployment command DM option |Value |Description |
        --- | --- | ---
        |`--rpdm-enabled`|\{yes/no\}|Enable DM for data connections (default=no).|
        |`--rpdm-host`|HOST/IP|Hostname or IP for DM server.|
        |`--rpdm-user`|USERNAME|Username for DM server.|
        |`--rpdm-pass`|PASSWORD|Password for DM server.|
        |`--rpdm-temp-dir`|DIRECTORY|Temporary directory on DM server.|
        |`--rpdm-ml-uri`|URI|URI for ML-ServicesAPI accessible by DM server.|
3. Press the **Enter** key to continue the deployment (or add `--force` to the shell command to skip the prompt).
    - Depending on your network speed, it may take ten minutes or more to download all the Docker containers.

    |Optional deployment command |Description |
    --- | ---
    |`sudo ./deploy_service_to_node.sh --help`|Display all commands allowed by the deploy script.|
    |`sudo ./deploy_service_to_node.sh --cmd status`|Display the service status.|
    |`sudo ./deploy_service_to_node.sh --cmd delete`|Delete the service.|

### Check status
    
- View the status of the local Docker deployment with this command:
    ```
    sudo docker service ls
    ```
    This command displays all services that have been started. When everything is running, the replicas column should show one out of one (1/1) replicas running.
- Before proceeding to the next step, verify that all services are executing.

### Add additional app admin or system admin users (OPTIONAL)
    
- The deployment script creates a default administrator account named `admin`, with the password `.RedPoint123`. This account is granted both app admin and system admin privileges.
- Additional app admin and system admin users can be created only through the rgOne API.

### Log in to the rgOne Admin site to enter the license key and enable apps on clients
    
1. Log on to the rgOne Admin site with the default administrator account created during deployment:
    ```
    https://LINUX-HOSTNAME:8993/#/Login
    ```
    or
    ```
    http://LINUX-HOSTNAME:8990/#/Login
    ```
2. When you log in for the first time, the License page is displayed. Enter the license key given to you by Redpoint Support and click **Verify**.
3. The rgOne apps to which the license key gives you access appear in the **Products** section.
    ![Admin site License page](/img/admin-site-license-page.png)

### Enable apps within clients
    
- A *client* (aka *tenant*) is a group of users with access to a set of rgOne apps. You can think of a client as a rule that says "users A, B, and C have access to apps X and Y".
- Adding a user to a client must be done explicitly in the API, one user at a time.
- The client `Global` is always created, and is connected only to AML.
- If you integrate with RPI, the necessary clients are inherited from RPI.
1. Click the Redpoint logo in the left of the top horizontal navigation bar. The **Clients** page is displayed.
    ![Admin site Clients page](/img/admin-site-clients-page.png "Admin site Clients page")
2. For an AML-only installation:
    1. Click the arrow for `Global Client`. The Global Client page is displayed.
        ![Global Client page](/img/global-client.png)
    2. Choose options. 
        - Select:
            - **DCC**
            - **Machine Learning**  
        - Deselect:
            - **Single Customer View**
    3. Click **Back**.
3. To install other rgOne apps.
4. Log off of the rgOne Admin site (click the **Log off** icon on the right side of the horizontal navigation bar).

### Create a role for each app (with all permissions enabled)
    
- As the first administrator for the rgOne apps, you must define at least one role for each app and assign permissions to the roles.
1. [Add a user role](adding-a-user-role#to-add-a-user-role) for every installed rgOne app.
    1. Log on to rgOne using the default `admin` account (or any other app admin account you have created).
    2. Enable all permissions for each app role.
    3. Enable each app role for each app `admin` user.
2. To activate the new roles, log off and then log on using the `admin` account. You now have full access to every app's functionality.

### Prepare for production use
    
1. Verify that each rgOne app is operational.
2. We recommend that you [add a unique user account](adding-user-roles-and-user-accounts) for every user that will be using each rgOne app. We do not recommend that users share accounts.