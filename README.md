# create-ken-express-server

A simple Express.js server generator by ken for ken.

## Usage

```bash
npm init ken-express-server [directory] # "." works for root directory.
```

This will create a new Express.js project with the following structure:

- `app.js` - Main application file
- `routes/` - Route handlers
- `utils/` - Utility functions (logger, response middleware)
- `.env` - Environment variables (empty)
- `.env.example` - Example environment variables (empty)
- `.gitignore` - Git ignore file (only if not present)
- `package.json` - Project dependencies

The generator code lives in the repo root, and the generated app template is under `template/`.

## Features

- Express.js server
- Morgan for logging requests
- Log4js for advanced logging
- Dotenv for environment variables
- Nodemon for automatic server restarts
- Testing suite/route testing with Jest & Supertest
- Custom response middleware
- Main Route file

## Getting Started

After running the generator:

1. Add `PORT=4000` to `.env`
2. Run `npm install`
3. Run `npm run dev` to start the development server
4. Run `npm test` to execute the included route test