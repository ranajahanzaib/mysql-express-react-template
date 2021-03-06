# MySQL-ERN Template (Dockerized)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

Instantly create MySQL-ERN based projects with this template.

## Get Started

### Step 1: Use This Template

Click **Use this template** button from the top-right corner to instantly create a new repo.

<img src="step-1.png" >

Or, Follow this [Installation Guide](./INSTALL.md).

### Step 2: Rename .env.example to .env

Docker needs the `.env` file to configure the MySQL-ERN containers. Please, make sure that you rename `.env.example` to `.env`

### Step 3: Install Dependencies

Make sure you're inside the root of repository to install required dependencies.

```sh
npm install
```

### Step 4: Run

Use `npm start` command to run `docker-compose` services.

```sh
npm start
```

### Step 5: Test

With default settings, your application is configured as:

<table border>
  <tr>
    <th>Services</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>Express</td>
    <td><a href="http://localhost:5000">http://localhost:5000</a></td>
  </tr>
  <tr>
    <td>React</td>
    <td><a href="http://localhost:3001">http://localhost:3001</a></td>
  </tr>
  <tr>
    <td>MySQL</td>
    <td><a href="http://localhost:3310">http://localhost:3310</a></td>
  </tr>
  <tr>
    <td>phpMyAdmin</td>
    <td><a href="http://localhost:8585">http://localhost:8585</a></td>
  </tr>
</table>

Update the port configurations in the `.env` file with your own settings, if you need to.

## Contributing

We'd love to accept your patches and contributions to this project. There are just a few guidelines you need to follow.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

This project follows [Contributor Covenant](https://www.contributor-covenant.org/)
as it's Code of Conduct, and we expect all project participants to adhere to it.
Please read the [full guide](./CODE_OF_CONDUCT.md) so that you can understand
what actions will not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our [contributing guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to project.

### [LICENSE](./LICENSE)

This project is licensed under the [MIT License](./LICENSE), meaning that you're free to modify, distribute, and / or use it for any commercial or private project.
