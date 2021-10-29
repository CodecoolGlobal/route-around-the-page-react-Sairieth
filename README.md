# Route around the page

## Story

There is no website where you find all the information in a single webpage.
You want to separate your pages from each other in order to help your users find what they are searching in your site.

That's why you decided to try how React routing works.
In this project you will create a blueprint of the layout of a web site with 3 pages, a header and a footer.
With this you can create a group of components that you can use other times.

## What are you going to learn?

- React
- React routing
- Create reusable components

## Tasks

1. Create a landing page that your user will see firstly when they reach the website. The page is built by a layout that will be the base to all the subpages. The layout contains the header and footer. The header will be our navigation tool, it contains all the 3 links of the web application (home, about, contact). The footer simply contains a phrase describing that the page is nothing more than a example project. The page content (beside the content of the base layout) don't need to be more than a title that describes where are the user.
    - When we start the application with the `npm start` command, we see a landing page with a header and footer opening
    - Whenever we navigate to the route `/`, there is a title `This is the home page` in the content section of the page
    - The header contains a link `Home` to the route `/`, a link `About` to the route `/about` and a link `Contacts` to the route `/contacts`
    - The footer contains the phrase `This is an example project for training the react routing`

2. Create an `About` page for your users. The page is built by the same layout the landing page is using. That means, it contains the same header and the same footer from the landing page. There is a title on the page.
    - When we navigate to the route `/about`, we see a page showing up with the same header and footer as the landing page uses
    - The page contains a title `This is the about page`

3. Create a `Contacts` page. The page is built by the same layout the landing page is using. That means, it contains the same header and the same footer from the landing page. There is a title on the page.
    - When we navigate to the route `/contacts`, we see a page showing up with the same header and footer as the landing page uses
    - The page contains a title `This is the contacts page`

## General requirements

- You need to use the package `react-router` for the routing (see background materials).

## Hints

- Start the project by creating a new react app with the command `npx create-react-app <the-application-name>`.
- Use the package `react-router` for the routing (see background materials).
- Use the `App` to building the routing up and create different components for all the page.
- Create a `Layout` component where you can build a basic layout for your pages. You can place you header and footer components in it and with the children property you can build your pages easily with a common layout.

## Background materials

- <i class="far fa-exclamation"></i> [React router](https://reactrouter.com/)
- <i class="far fa-exclamation"></i> [Understanding react routing](https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e)
