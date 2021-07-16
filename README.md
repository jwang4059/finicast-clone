<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Finicast Clone
</h1>

## 🚀 Quick start

1.  **Project Commands**


    ```shell
    npm run dev
    npm run build
    npm run start
    npm run serve
    npm run clean
    ```

2.  **Project Tech Stack**

    - React + GatsbyJS
    - Sass
    - Eslint + Prettier

3.  **Design Choices**

    The goal of this project was to rebuild Finicast's current website and make it more responsive and user friendly. As of now, Finicast has 3 main pages (home, about, and contact). Since I was only rebulding the frontend portion of the website, I decided to use GatsbyJS because this library comes with built in client side navigation and is a good framework to work with if you are only working with static files. I used Sass because I know it's popular and wanted to learn something new. On top of all of that, I used Eslint + Prettier to help me maintain clean, readable code.

4.  **Changes I've made**

<img src="https://user-images.githubusercontent.com/29056808/125938457-6501d887-2ba8-4adb-ab83-18288845864a.png" alt="" width=300> <img src="https://user-images.githubusercontent.com/29056808/125938542-f29b9350-6643-4c06-a0e0-f51843035b88.png" alt="" width=300>

- In the first example, I wanted to address the footer and how the buttons looked after resizing. I was able to clean up some of the spacing problem using CSS grids.

<img src="https://user-images.githubusercontent.com/29056808/125938492-df4fcc7f-0932-481f-ba75-2604aac279ca.png" alt="" width=300> <img src="https://user-images.githubusercontent.com/29056808/125938553-5bca2ff7-fe04-4da3-855c-698166bfd2d7.png" alt="" width=300>

- In the next example, I wanted to address the spacing between each person. Here I decided to use only one column, in order to keep the components from overlapping.

<img src="https://user-images.githubusercontent.com/29056808/125938511-060fd098-eea2-4029-ba72-7ff865f0aeec.png" alt="" width=300> <img src="https://user-images.githubusercontent.com/29056808/125938571-8b5d6fdf-6f26-4f6e-85e7-43620cd7bc1f.png" alt="" width=300>

- In the final example, I wanted to fix the extra space you get on the side of the screen. I think I was able to remove the random space by managing my padding and margins.

5. **Things I would do if I had more time**

- add a toggle button for the navbar for mobile users (this would make it easier to navigate to different pages)
- add in animations (missing animations that link to LinkedIn and dropdown menus for navbar)
- make a working contact form (my current contact form doesn't do anything with the data provided)
- clean up some CSS code (should of used more of the functions provided by Sass to reduce code)    
