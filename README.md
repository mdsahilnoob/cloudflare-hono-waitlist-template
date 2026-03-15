# Astro Starter Kit: Basics

```sh
bun create astro@latest -- --template basics
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

```
bun run client      //run frontend
bun run worker      //run backend

bun run dev         //run both frontend and backend

dryrun:staging      //builds the client
deploy:prod         //push in cloudflare workers

create:test:db      //create test db
destroy:test:db    //destroy test db

bun run test        //creates test db, runs test and destroys db
```

## Docs

cloudflare - https://dash.cloudflare.com/98e6e417612969bebbdf298b9c15d264/workers-and-pages

cloudflare docs - https://developers.cloudflare.com/

Hono docs - https://hono.dev/docs/

Bun docs - https://bun.sh/docs


## Tech stack

- Astro
- React
- TailwindCSS
- Daisy UI
- Zod
- Bun
- Hono
- Cloudflare D1
- Drizzle ORM
- Prettier 
- Sqlite


## Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

inspired from this playlist - https://www.youtube.com/playlist?list=PLLCXhfggeqE97wnuesWK9UHkYEv2-b8FB