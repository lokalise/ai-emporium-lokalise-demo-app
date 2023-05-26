<p align="center">
 <img src="https://user-images.githubusercontent.com/1884712/132941531-0fdd7acf-47ca-424e-b77f-1fab2e372a37.png" alt="W3T" width="100" height="41"/>
 </a> 
 <br>
 <br>
</p>

# Nextly - Landing Page Template with Next.js & Tailwind CSS

Nextly is a free landing page & marketing website template for  startups and indie projects. Its built with Next.js & TailwindCSS.
And its completely open-source.
 
![image](https://user-images.githubusercontent.com/1884712/121497169-03228680-c990-11eb-975a-e77fddc43de0.png)

## How to use

### Step 1: Create a Copy of this Repository
Start by forking this repository or cloning it to your GitHub account. 

### Step 2: Set Up Lokalise Project
a. Set up the project on Lokalise with source language is **English** (en), and the target language is **German** (de).
b. Enable automations for target language from machine translation when new source translation keys are added or updated.
<img width="1291" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/64abb810-5b7e-4ce5-9f78-1db31d66493a">


### Step 3: Add Variables and API Token on you GitHub project settings
Next, update the necessary variables and your API token secret.
a. Get Lokalise API Token <a>here</a> and add `API_TOKEN` secret as shown below picture.
<img width="809" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/69703b27-8d9d-4f13-9b91-1fb0e00b1483">

b. Add folowing variables 
| Variable  |    value  |   Note    |
| --------- | --------- | --------- |
| PRODUCTION_BRANCH | main |        |
|PRODUCTION_BRANCH_RESTORE_COMMIT |  | Used by Reset sceduler action       |
| PRODUCTION_TAG | main |        |
| PROJECT_ID |  | <a href="https://docs.lokalise.com/en/articles/1400460-projects#h_4fedc4407f" target="_black">Get Lokalise project ID</a>   from previous step    |
| STAGING_BRANCH | stage |        |
| STAGING_TAG | stage |        |
| TARGET_LANG_ISO | de |        |
<img width="809" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/f63523a3-6e16-4f68-a0bf-acb4fc949460">

c. Configure your Github action settings' Action permissions and Workflow permissions. 
<img width= "809" alt="image" src="https://github/readmeAssets/workflowPermissions.JPG""

<img width= "809" alt="image" src="https://github/readmeAssets/workflowPermissions.JPG"">





Step 4: Connect Project to Vercel
a. Login to <a href="https://vercel.com/login" target="_blank">Vercel</a with GitHub account.
<img width="724" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/bce87b8f-ad98-454c-a45b-1932829d2b22">

b. Connect the GitHub project to Vercel. When doing this, choose a project name that accurately represents the project's purpose. 

### Step 5: Manual Update of Source Translation Keys to your Lokalise project 
 You will need to manually push the source translation keys from the main branch. 
 Run GitHub action PUSH
 <img width="1674" alt="Screenshot 2023-05-25 at 14 56 05" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/39171228-a4be-43c0-be6b-af8f90420550">


### Step 6: Initiate Automation on Lokalise TMS
Trigger an automation run on the Lokalise project.
 <img width="1674" alt="Screenshot 2023-05-25 at 14 57 26" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/4380655c-c97e-421b-8219-65119633bd5d">


### Step 7: Retrieve Source Translation Keys
Run GitHub action PULL
 <img width="1674" alt="Screenshot 2023-05-25 at 14 56 23" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/3eaaec6c-a8e0-4871-a122-b80726413d4b">


### Step 8: Pull Request Review and Merge
Review the changes made by checking Vercel deployment preview link, and if they are satisfactory, merge the pull request.
<img width="917" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/f1712c63-5f48-4368-a4f3-c8a1fcb7c62c">



## Deploy with Vercel

Deploy this template using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/surjithctly/nextly-template&project-name=nextly-template&repository-name=nextly-template)


## Author

Anil Kumar ( [@anilbms75](https://twitter.com/anilbms75/) )

---

[![image](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=web3templates&utm_campaign=oss)




