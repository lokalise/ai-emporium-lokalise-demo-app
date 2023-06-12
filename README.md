<p align="center">
    <a href="https://lokalise.com/" target="_blank"> 
        <img src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/45fdeaf0-f4a7-4e3c-a6c3-9e30440ed22f" alt="Lokalise logo" width="100"/>
    </a> 
    <br>
    <br>
</p>

#  AI-Emporium - Landing Page with Next.js, i18next & Tailwind CSS
<img width="1729" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/1d76ddf9-5086-4de2-9ae4-d7a91b32f103">

## How to use?

### Step 1: Create a Copy of this Repository
Start by forking this repository or cloning it to your GitHub account. 

### Step 2: Set Up Lokalise Project
a. Set up the project on Lokalise with source language is **English** (en), and the target language is **German** (de).

b. Enable automations for target language from machine translation when new source translation keys are added or updated.
<img width="1291" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/64abb810-5b7e-4ce5-9f78-1db31d66493a">


### Step 3: Add Variables and API Token on you GitHub project settings
Next, update the necessary variables and your API token secret.

a. Get Lokalise API Token <a href="https://docs.lokalise.com/en/articles/1929556-api-tokens" target="_blank">here</a> and add `API_TOKEN` secret as shown below picture.
<img width="809" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/69703b27-8d9d-4f13-9b91-1fb0e00b1483">

b. Add following variables 
| Variable  |    value  |   Note    |
| --------- | --------- | --------- |
|PRODUCTION_BRANCH_RESTORE_COMMIT |  | Used by Reset sceduler action       |
| PROJECT_ID |  | <a href="https://docs.lokalise.com/en/articles/1400460-projects#h_4fedc4407f" target="_black">Get Lokalise project ID</a>   from previous step    |
<img width="807" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/b34f1873-d505-45ba-8b0d-46804a5157c1">


### Step 4: Update workflow permissions 
Navigate to your GitHub project > Settings > Actions and update workflow permissions fields. 
a. Enable read and write permission. 
b. All GitHub Actions to create Pull request 
<img width="1438" alt="Screenshot 2023-05-26 at 05 10 32" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/60aefc55-990e-4464-9d39-587ea5348849">


### Step 5: Connect your GitHub Project to Vercel
a. Signup/Login to <a href="https://vercel.com/login" target="_blank">Vercel</a> with GitHub account.
<img width="724" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/bce87b8f-ad98-454c-a45b-1932829d2b22">

b. Connect your GitHub project to Vercel. When doing this, choose a project name that accurately represents the project's purpose. 

### Step 6: Manual Update of Source Translation Keys to your Lokalise project 
 You will need to manually push the source translation keys from the main branch. 
 Run GitHub action PUSH
 <img width="1674" alt="Screenshot 2023-05-25 at 14 56 05" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/39171228-a4be-43c0-be6b-af8f90420550">


### Step 7: Initiate Automation on Lokalise TMS
Trigger an automation run on the Lokalise project.
 <img width="1674" alt="Screenshot 2023-05-25 at 14 57 26" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/4380655c-c97e-421b-8219-65119633bd5d">


### Step 8: Retrieve Source Translation Keys
Run GitHub action PULL
 <img width="1674" alt="Screenshot 2023-05-25 at 14 56 23" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/3eaaec6c-a8e0-4871-a122-b80726413d4b">


### Step 9: Review Commit
Review the changes made by checking Vercel deployment preview link, and if they are satisfactory.
<img width="890" alt="image" src="https://github.com/anilkk/ai-emporium-lokalise-demo-app/assets/1124415/e8c890a5-99b8-413f-99b0-1e02c8e8f9bf">



## Deploy with Vercel

Deploy this template using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/surjithctly/nextly-template&project-name=nextly-template&repository-name=nextly-template)


## Author

Anil Kumar ( [@anilbms75](https://twitter.com/anilbms75/) )

## Reference 
This project is forked and inspired from [nextly-template](https://github.com/web3templates/nextly-template/) project.

---

[![image](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=web3templates&utm_campaign=oss)




