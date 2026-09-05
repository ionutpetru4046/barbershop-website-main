# Barber Shop Website

A modern, stylish Barber Shop website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), designed to showcase services, facilitate online bookings, and present a premium experience for clients.

## Features

- ✂️ Elegant and responsive UI with contemporary barber shop branding
- 🗓️ Seamless online booking experience
- 💇 Service cards with descriptions, prices, and stylish images
- 🌙 Modern UI effects: gradients, glassmorphism, subtle shadows, and dynamic transitions
- ⚡ Fast performance and fully responsive on all devices
- 🛠️ Powered by Next.js App Router and TypeScript
- 🎨 Custom theming with Tailwind CSS and CSS variables for easy style adjustments

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) or [bun](https://bun.sh/)

### Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/barber-shop-website.git
cd barber-shop-website
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

### Building for Production

To build and start the production server:

```bash
npm run build
npm start
```

Or use your preferred package manager.

## Customization

- Update services, prices, and images via [`src/app/components/ServiceCard.tsx`](./src/app/components/ServiceCard.tsx).
- Branding colors and font can be adjusted in [`tailwind.config.js`](./tailwind.config.js) and CSS variables.
- The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for font optimization. You can customize font choices as needed.

## Deployment

Deploy this website instantly on [Vercel](https://vercel.com/new) or any platform that supports Next.js.

For more deployment options and documentation, see the [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

**Showcase your barber shop online with style. Give your customers a straightforward, premium booking experience and highlight your unique brand!**

## License

This project is licensed under the MIT License.
