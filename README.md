# Revolve

[![CircleCI](https://circleci.com/gh/nhippenmeyer/revolve.svg?style=svg)](https://circleci.com/gh/nhippenmeyer/revolve)

## Getting Started

### Install Dependencies

[Install node.js](https://nodejs.org/en/) (v10.16.0). If using [nvm](https://github.com/nvm-sh/nvm) the correct version can be automatically installed by running: `nvm install`

Install node modules: `npm install`

### Database

#### Postgres

Install postgres: `brew install postgres # macOS`

## Available Scripts

### Building

```bash
npm run build
npm run watch-ts # watch mode
npm run clean # remove dist directory
```

### Database

```bash
npm run db:migrate # migrate database
npm run db:migration:generate <migration_name> # generate migration
```

#### Postgres

```bash
# Development
npm run db:postgres:create # Create database
npm run db:postgres:drop # Drop database
npm run db:postgres:reset # Reset database

# Test
npm run db:postgres:create:test # Create test database
```

### Running the Application

```bash
npm start
npm run watch # watch mode
```

### Linting

```bash
npm run lint
npm run fix # fix errors
npm run watch-eslint # watch mode
```

### Testing

```bash
npm test
npm run watch-test # watch mode
```
