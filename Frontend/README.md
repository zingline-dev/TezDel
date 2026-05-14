# TezDel Frontend

Container folder for TezDel's frontend applications.

## Project Structure

```
Frontend/
├── TezDel_Web/          # Main Next.js web application
│   ├── app/
│   ├── lib/
│   ├── utils/
│   ├── types/
│   ├── hooks/
│   ├── context/
│   ├── public/
│   └── ... config files
├── .gitignore
└── README.md
```

## Getting Started

### Web Application

Navigate to the TezDel_Web directory and follow the instructions in its [README](./TezDel_Web/README.md).

```bash
cd TezDel_Web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Development

All active development happens in the `TezDel_Web/` folder. This is a standard Next.js 14 project with TypeScript.

## Build for Production

```bash
cd TezDel_Web
npm run build
npm start
```

## Environment Variables

Create `TezDel_Web/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios

## Project Information

- **App Name**: TezDel
- **Tagline**: Fast. Trusted. Local.
- **Platform**: Hyperlocal Food & Grocery Delivery
- **Location**: Bhubaneswar, Odisha, India

For detailed information, see [TezDel_Web/README.md](./TezDel_Web/README.md)
