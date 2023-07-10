# Universal Editor Sample App

## Using the Sample App
This Sample App is hosted at https://ue-remote-app.adobe.net.
Per Default the content is retrieved and written back to our Production Demo Environment:
```
authorHost=https://author-p7452-e12433.adobeaemcloud.com
publishHost=https://publish-p7452-e12433.adobeaemcloud.com
```
If you'd like to retrieve content from another environment add authorHost & publishHost as query parameters, e.g.

[https://ue-remote-app.adobe.net?authorHost=https://author-p15902-e145656-cmstg.adobeaemcloud.com&publishHost=https://publish-p15902-e145656-cmstg.adobeaemcloud.com](https://ue-remote-app.adobe.net?authorHost=https://author-p15902-e145656-cmstg.adobeaemcloud.com&publishHost=https://publish-p15902-e145656-cmstg.adobeaemcloud.com)

respectively if run on local dev environment:

[https://localhost:3000?authorHost=https://author-p15902-e145656-cmstg.adobeaemcloud.com&publishHost=https://publish-p15902-e145656-cmstg.adobeaemcloud.com](https://localhost:3000?authorHost=https://author-p15902-e145656-cmstg.adobeaemcloud.com&publishHost=https://publish-p15902-e145656-cmstg.adobeaemcloud.com)


## Prerequisites 

- AEMCS instance is available
- WKND project is installed on the instance
- CORS enabled on AEM instance for the app
- For local development with editor, ensure app is using *https*

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [https://localhost:3000](https://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.
Utilize a gulp task to bundle all the JS and CSS files in the static build folder into the single main `index.html` file.
This is useful for having the `index.html` bundle file automatically deployed on `https://ue-remote-app.adobe.net` when pushing new changes on the `main` branch.

This command is executed automatically before each commit by the `pre-commit` script.

## Automatic deployment flow

The application uses the husky package (https://www.npmjs.com/package/husky), for adding a pre-commit script, located in the  `.husky` folder.
The `pre-commit` script will be run before each commit. It will build the project and will add the build bundle from `build/index.html` to the commit.
We expose this bundle to GitHub. This is happening due to the usage of internal artifactory packages (we cannot build the project on a deployment environment).

The flow is that we build the application locally and deploy the bundle through GitHub workflow to https://ue-remote-app.adobe.net, on each PR merged to the `main` branch.

## Deployments

The application is automatically deployed on every commit/PR merge to the `main` branch.

Deployed app can be accessed at https://ue-trials-app.adobe.net
