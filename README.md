# ⛵ Manila Turbo 🚀

Monorepo bootstrapped using [`create-t3-turbo`](https://github.com/t3-oss/create-t3-turbo). A small project aim to replicate board game Manila on the web, so this little group can play it for free (except the deployment costs).

## 📐 How to set up this repo on my machine?

Ez just do the following.

```bash
# Install all the dependencies
pnpm i

# Copy the example environment to a working one
cp .env.example .env

# Initialize local db cluster and push db schema.
pnpm db:init-local # running this twice will error out, so don't do da.
```

Yup, that's it for now, should have more instructions in the later commits. 👋👋
