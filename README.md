<a name="readme-top"></a>

<h1 align="center">Next.js and MongoDB</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#features"> Features</a>
        <li><a href="#dependencies">Dependencies</a></li>
    </li>
    <li>
    <a href="#deployment"> Deployment</a>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
  # About The Project

<div align="center">
  <img src="/public/images/HomePage.png">
</div>
<h3 align="center">Cookies Cracking</h3>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Built With -->
  # Built With

To create this prject I use the following tools

* [![javascript][javascript.com]][javascript-url]
* ![WebPack][WebPack.com]
* ![HTML][HTML.com]
* ![CSS][CSS.com]
* ![gitignore][gitignore.com]
* ![NodeJS][NodeJS.org]
* [![React][React.js]][React-url]
* [![shadcn][shadcn\ui]][shadcn-url]
* [![Tailwind][Tailwind]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->
  # Features

<div align="center">

Fast and light without [bulky](https://bundlephobia.com/result?p=express@4.17.1), [slow](https://github.com/fastify/benchmarks#benchmarks) Express.js.

Full [API Routes](https://nextjs.org/blog/next-9#api-routes) implementation 

Middleware pattern compatible with Express ecosystem, powered by [next-connect](https://github.com/hoangvvo/next-connect)


Can be adapted to any databases besides MongoDB (Just update [api-lib/db](api-lib/db))

</div>

<h3 align="center">:lock: Authentication and Account</h3>

<div align="center">

- [x] Session-based authentication ([Passport.js](https://github.com/jaredhanson/passport))
- [x] Sign up/Log in/Sign out API
- [x] Authentication via email/password
- [x] Email verification
- [x] Password change
- [x] Password reset via email

</div>

<h3 align="center"> Profile</h3>

<div align="center">

- [x] Profile picture, username, name, bio, email
- [x] Update user profile

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div align="center">
  
  
</div>


<!-- Dependencies -->
  # Dependencies

This project uses the following dependencies:

- `next.js` - v9.3 or above required for **API Routes** and new [**new data fetching method**](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).
- `react` - v16.8 or above required for **react hooks**.
- `react-dom` - v16.8 or above.
- `swr` - required for state management, may be replaced with `react-query`
- `mongodb` - may be replaced by `mongoose`.
- `passport`, `passport-local` - required for authentication.
- `next-connect` - recommended if you want to use Express/Connect middleware and easier method routing.
- `next-session`, `connect-mongo` - required for session, may be replaced with other session libraries such as `cookie-session`, `next-iron-session`, or `express-session` (`express-session` is observed not to work properly on Next.js 11+).
- `bcryptjs` - optional, may be replaced with any password-hashing library. `argon2` recommended.
- `validator` - optional but recommended, to validate email.
- `ajv` - optional but recommended, to validate request body.
- `multer` - may be replaced with any middleware that handles `multipart/form-data`
- `cloudinary` - optional, **only if** you are using [Cloudinary](https://cloudinary.com) for image upload.
- several other optional dependencies for cosmetic purposes.
- `nodemailer` - optional, **only if** you use it for email. It is recommended to use 3rd party services like [Mailgun](https://www.mailgun.com/), [AWS SES](https://aws.amazon.com/ses/), etc. instead.

<h3 align="center">Environmental variables</h3>

Environmental variables in this project include:

- `MONGODB_URI` The MongoDB Connection String (with credentials and database name)
- `WEB_URI` The _URL_ of your web app.
- `CLOUDINARY_URL` (optional, Cloudinary **only**) Cloudinary environment variable for configuration. See [this](https://cloudinary.com/documentation/node_integration#configuration).
- `NODEMAILER_CONFIG` (optional, if using nodemailer **only**) JSON stringified nodemailer config. eg. `{"service":"Gmail","auth":{"user":"hoangvvo.02@gmail.com","pass":"aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUQ=="}}`
- `EMAIL_FROM` an e-mail to send mail with 

<h3 align="center">Development</h3>

Start the development server by running `yarn dev` or `npm run dev`. Getting started by create a `.env.local` file with the above variables. See [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Deployment -->
 # Deployment

This project can be deployed [anywhere Next.js can be deployed](https://nextjs.org/docs/deployment). Make sure to set the environment variables using the options provided by your cloud/hosting providers.

After building using `npm run build`, simply start the server using `npm run start`.

You can also deploy this with serverless providers given the correct setup.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
 # Contact

Giovanni Bono - [@portfolio](https://developer.giovannibono.com/) - me@giovannibono.com

Project Link: [cookiescracking.giovannibono.com/m](https://cookiescracking.giovannibono.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[javascript-url]: https://javascript.com
[javascript.com]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[HTML.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS.com]:https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[WebPack.com]: https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white
[gitignore.com]: https://img.shields.io/badge/gitignore%20io-204ECF?style=for-the-badge&logo=gitignoredotio&logoColor=white
[NodeJS.org]: https://img.shields.io/badge/nodejs-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[shadcn\ui]: https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white
[shadcn-url]: https://ui.shadcn.com/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/