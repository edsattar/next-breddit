following https://youtu.be/mSUKMfmLAt0

# Breddit - A Reddit Clone 

Built with the Next.js App Router, TypeScript & Tailwind

## Getting started

To get started with this project, run

```bash
  git clone -b starter-code https://github.com/joschan21/breadit.git
```

and copy these .env.example variables into a separate .env file:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```
```ts
src
 ├────────────────────────────────────┐
 ├\app─<RootLayout> (1)               ├lib
 │  │   ├<Navbar> (3)                 └auth.js
 │  │   └<Toaster> (7)
 │  └─<RootPage> (2)
 │
 ├\api
 │ └\auth\[...nextauth]
 │             └─route.ts
 ├(auth)\sign-in
 │ └<SignInPage> (4)
 │   └<SignIn> (5)
 │     └<UserAuthForm-C> (6)
```