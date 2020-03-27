# Vue-Guide

This is a small **documentation** for the core semester project **Goodbuy**.

You will learn how to **set up** this Project for development and about general **coding conventions** you should follow.

## Set Up for Development

To **get access** to this project make sure your Github account is added as a collaborator to the project.

Then, clone this Project:

```bash
git clone git@github.com:Mayson12381/goodbuy-vue.git
```

Install all dependencies

```bash
cd goodbuy-vue
npm install
```

To run on your local machine for development (includes hot-reload)

```bash
npm run serve
```

To compile and minifie for production
>**!WARNING**
>This is a command usually run automatically by a host  service and usually not needed for development.

```bash
npm run build
```

## Collaboration

To **collaborate** with other developers we use `git` with `Github` for version control and collaboration.

### Main Branches

These are the **branches** that need to exist at any given time of the development phase.

* **master**

The `master` branch usually remains **untouched** throughout most of the development.
If a either a **collection of new features** where added or a **hotfix** was needed,
one of the lead developers will merge either the `dev` branch or the `hotfix` branch respectively
into the `master` branch to trigger an update of the website.

>The `master` branch is not directly pushable, only pull requests that are approved by the code owner can be merged

* **dev**

The `dev` branch is our main branch for development. This is where eventually all features end up
before getting pushed to production when they are fully **developed**, **tested** and then **reviewed** by at least one other developer.

>The `dev` branch is not directly pushable, only pull requests that are approved by at least one other developer can be merged

### Branch Folders

During development a `folder prefix` for every branch is always to be used for the task you are working on.
This makes an overview of the current state of the product easier and more intuitive.

>If you think none of these suit your needs you did something wrong

* **feature/**

The `feature/` branch prefix is reserved for features.

* **fix/**

The `fix/` branch prefix is reserved for fixes of already implemented features.

* **hotfix/**

The `hotfix/` branch prefix is reserved for hot-fixes that need to be fixed A$AP.
Branches with exclusively this prefix can be merged directly into master.

* **test/**

The `test/` branch prefix is reserved for adding features that are only being explored without the current need to be implemented.

* **vuepress/**

The `vuepress/` branch prefix is reserved for additions and changes to the documentation you are currently reading.

* **cypress/**

The `cypress/` branch prefix is reserved for adding end to end cypress tests.

* **u-test/**

The `u-test/` branch prefix is reserved for adding unit tests.

### Branch Names

Branch names are always [kebab-case](https://wiki.c2.com/?KebabCase) and should be as short as possible.

### Commits

Commits should be as descriptive as possible while keeping it to 50 characters or less.

Keywords to stick to:
* `Add ...`
* `Fix ...`
* `Update ...`
* `Rework ...`
* `Refactor ...`
* `Remove ..`
* `Release ...`
* `WIP`

>Propositions are encouraged if you feel like something is missing

### Pull Requests / Adding your code

When you are done working on your current task **follow these steps** to get your changes added to the product:

1. Check if your code **follows** our [coding conventions](./#coding-conventions).
2. Make sure your code passes all current **tests** and check if you added sufficient **tests** yourself.
3. **Push** your changes to our remote repository.
4. Open a **Pull Request** to the correct branch (most likely `dev`)
5. Add at least one developer as a **reviewer** and describe your changes and additions as good as possible in the **info box**.
If your changes are **UI** related - consider adding screenshots for clarification.

## Coding Conventions

### Vue.js's Conventions

In general our coding conventions follow the conventions of the official [Vue.js](https://vuejs.org/v2/style-guide/) documentation.

### Folder Structure

* All our **source code** can be found in the `/src` folder.
* **Components** are located in the `/src/components` folder and each view has its own sub-folder
* **Assets** like icons, images & logos can be found in the `/src/assets` folder divided into sub-folders named after their category

To keep sub-folders organized:
* A **parent component / folder main component** is usually named `<folder name> + 'view'` (*e.g. ScannerView.vue*)
* A **child component** is usually named  `'<parent component name> + <functionality>'` (*e.g. ScannerViewInfoButton.vue*)
>Exceptions to this rule can be made within reason (*e.g. Scanner.vue*)

### Components

**Components** on the lowest level (*i.e. those that have no child components*) should always strive to be
modular and only solve one specific task.

**Naming**  

* **Component Names** follow the [PascalCase](https://wiki.c2.com/?PascalCase) convention.
* **Variables, Computed Properties & Functions** follow the [camelCase](https://wiki.c2.com/?CamelCase) convention.
* **CSS Style Classes** follow the [kebab-case](https://wiki.c2.com/?KebabCase) convention.
