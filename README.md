# Lightning Web Components Recipes

Built on top of [LWC Recipes](https://github.com/trailheadapps/lwc-recipes), I've added recipes for Reusability and Styling, and used them during my demos in the following sessions:
- [SLDS Deep Dive and Best Practices](https://www.youtube.com/watch?v=jbm_9zoIonM)
- [Design Patterns and Best Practices to build reusable Lightning Web Components](https://www.youtube.com/watch?v=9I7kTPVtrkI)

## Installing the app using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

    ```
    sfdx force:auth:web:login -d -a myhuborg
    ```

1. Clone the lwc-recipes repository:

    ```
    git clone https://github.com/trailheadapps/lwc-recipes
    cd lwc-recipes
    ```

1. Create a scratch org and provide it with an alias (**lwc-recipes** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-recipes
    ```

1. Push the app to your scratch org:

    ```
    sfdx force:source:push
    ```

1. Assign the **recipes** permission set to the default user:

    ```
    sfdx force:user:permset:assign -n recipes
    ```

1. Import sample data:

    ```
    sfdx force:data:tree:import -p ./data/data-plan.json
    ```

1. Open the scratch org:

    ```
    sfdx force:org:open
    ```