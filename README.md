# Leaderboard: Ometman
<a name="readme-top"></a>

<div align="center">
  <img src="./ometman-logo.png" alt="logo" width="140"  height="auto" />
  <br/>
  <h3><b>Leaderboard: Ometman</b></h3>
  <h5>**"Leaderboard"** is a website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved by the external Leaderboard API service.
   It allows a game(s) to be 'added' and shows the added games on 'refresh' through the API service. The site was developed using ES6 and webpack and Leaderboard API service.<h5>
</div>


# 📗 Table of Contents
- [Leaderboard: Ometman](#leaderboard-ometman)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Leaderboard: Ometman ](#-leaderboard-ometman-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
    - [Author](#author)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)


# 📖 Leaderboard: Ometman <a name="about-project"></a>

This project **To Do List** demonstrates the development of a website that uses  Javascript structured in modules, with Webpack and other dependencies, ES6 syntax, HTML and CSS, and the Leaderboard API. It employs the use of an API service in displaying results of a game, incorporating best practices. 

>The project includes designs for two different screen sizes.

 - Mobile: up to 768px wide.
 - Desktop: 768px or wider.

>Brief :
 - There are no logo and navigation links.
 - There are only 2 buttons, one to add score and the other for refreshing.
 - There is a scoreboard showing the names and current scores of competitors.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>Bootstrap</li>
    <li>Webpack</li>
    <li>Wireframe-based design</li>
    <li>Leaderboard API Service</li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li>Optionally: Deployable Using GitHub Pages</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li>N/A</li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Conversion of a Wireframe design to HTML/CSS/JS using webpack**
- **Scores list section showing name and scores of players**
- **Add scores section for adding a new score**
- **Responsive Web Design: Desktop & Mobile**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

--Coming up soon.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- Git.
- An IDE (e.g. VS Code)
- Browser to run. 

### Setup

Clone this repository to your desired folder:
 - Using Git Bash or any integrated terminal of you choice.
 - Open with code editor (e.g. VS Code).
 - Make sure all dependencies( eg: webpack, webpack dev server, css-loader, sass-loader, bootstrap)

### Usage

To run the project locally, execute the following command:
- Run the following command;
  - npm install
  - npm run server (You should see a success result)
  - Now access the app on port 8080 by entering the following in your browser:
  - http://localhost:8080

### Run tests

To run tests, run the following command:

**************
Initial Step:
**************
- mkdir .github/workflows
- copy the **linters.yml** file to the directory created above.
- touch .gitignore if not created already and add **node_modules/** to it.
- initialize npm to create package.json file by running the command: 
> npm i -y      

(here i for install & -y for saying yes to all)

************************
For Webhint (optional):
************************
- Run
> npm install --save-dev hint@7.x
- To fix validation errors run: 
> npx hint .

**************
For Stylelint
**************
- Run 
> npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
- Copy **.stylelintrc.json** to the root directory of your project.

- Run 
> npx stylelint "**/*.{css,scss}" 
on the root of your directory of your project.
- Fix linter errors.

*******
ESLint
*******
- Run 
> npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
- Copy **.eslintrc.json** to the root directory of your project.

- Run 
> npx eslint .  
on the root of your directory of your project.
- Fix linter errors.

### Deployment
You can deploy this project using:
- GitHub Pages from a specific branch (e.g. main). 
- You can also used any cloud service like gcloud or Azure.
- A deployed version can be found here:
[https://... (Coming Soon)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="authors"></a>

> Developed by: Omet Omeni (Ometman)

### Author
- GitHub: [@ometman](https://github.com/ometman)
- Twitter: [@twitterhandle](https://twitter.com/ometman)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/ometman/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Full CURD functionality**
- **Improved interactive: Eg: Popup alert on deleting or adding a score**
- **Changing UI - look and feel**
- **Improved Aesthetics & Design**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ometman/leaderboard/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

As a tech enthusiast, your support is always appreciated. If you like this project please do let me know with your support in any way you see fit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank especially [Microverse](https://www.microverse.org/) for inspiring this project & project guidelines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>
- **Can I fork this project?**
  - Yes, feel free to fork and knock yourself out :) . 

- **Can I share this project with others?**
  - Yes, you can share this project for any educational purposes. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>
This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


