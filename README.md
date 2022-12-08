This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It follows the [simple example about adding a custom plugin in the JWPlayer docs](https://docs.jwplayer.com/players/docs/jw8-add-a-custom-or-third-party-plugin), but the plugin does get registered.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You will see the JWPlayer and that the custom plugin does not get registered, along with a console warning about this. If you click the "Check plugins" button, you will also see that the plugin is not returned on `jwplayer().plugins`.

The JWPlayer and plugin logic are in these two files:

- `pages/index.js`
- `public/plugin.js`
