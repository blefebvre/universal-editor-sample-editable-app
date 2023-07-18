# Universal Editor Sample App

## Using the Sample App
This Sample App is hosted at https://ue-trials-app.adobe.net/.
Per Default the content is retrieved and written back to our Production Demo Environment:
```
authorHost=https://author-p81252-e700817.adobeaemcloud.com
publishHost=https://publish-p81252-e700817.adobeaemcloud.com
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

## Deployments

The application is automatically deployed on every PR merge to the `prod` branch.

Deployed app can be accessed at https://ue-trials-app.adobe.net
