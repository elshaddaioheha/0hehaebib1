# Hi, I'm Elshaddai Oheha

Backend architect & full-stack engineer bridging Web2 reliability with Web3 trust. I build high-concurrency products, resilient data flows, and animated, performant interfaces.

[![Portfolio](https://img.shields.io/badge/Portfolio-0hehaebib1.vercel.app-111827?style=for-the-badge&logo=vercel)](https://0hehaebib1.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ojeka-ebibi)
[![GitHub](https://img.shields.io/badge/GitHub-@elshaddaioheha-111827?style=for-the-badge&logo=github)](https://github.com/elshaddaioheha)
[![Email](https://img.shields.io/badge/Email-hello%40oheha.dev-4338CA?style=for-the-badge&logo=minutemailer)](mailto:elshaddaioheha@gmail.com)

## Skills

- Frontend: React, Next.js, TypeScript, Tailwind, Framer Motion
- Backend: Node.js, Express, Redis, PostgreSQL, MongoDB
- Web3: Solidity, Hardhat, Hedera, Wallet integration
- Infra: Docker, Vercel, CI, caching, perf budgets

## Featured Projects

### TEBI LMS — https://tebiglobal.vercel.app
Badges: ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript) ![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis) ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)

Architecture (Mermaid):
```mermaid
graph TD;
  User-->Edge(Vercel Edge);
  Edge-->App(Next.js / TS);
  App-->Cache[(Redis Sessions)];
  App-->Storage[(Streaming + Media)];
```
Challenges Overcome:
- Sustained 1k+ concurrent learners with Redis session caching to keep latency low.
- Tuned video bitrate for low-data networks without quality collapse.
- Event-first onboarding to help planners ship courses fast.

### Swen-Autos — https://swen-autos.vercel.app
Badges: ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![Solidity](https://img.shields.io/badge/Solidity-363636?logo=solidity) ![Tailwind](https://img.shields.io/badge/Tailwind-0EA5E9?logo=tailwindcss)

Architecture (Mermaid):
```mermaid
graph TD;
  Buyer-->Web(Next.js UI);
  Seller-->Web;
  Web-->API(Node/TS);
  API-->Chain[(Smart Contracts)];
  API-->Payments[(Fiat & Crypto Rails)];
```
Challenges Overcome:
- Blockchain-backed listing identity to curb counterfeits.
- Multi-rail checkout (fiat + crypto) with escrow safety.
- Search/listing performance tuned for low-bandwidth devices.

### Agbejo — https://agbejo.vercel.app
Badges: ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![Hardhat](https://img.shields.io/badge/Hardhat-F7DF1E?logo=ethereum) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)

Architecture (Mermaid):
```mermaid
graph TD;
  User-->UI(Next.js UI);
  UI-->Svc(Node);
  Svc-->Contracts[(Hardhat Contracts)];
  Svc-->Auth(Web2 onboarding);
```
Challenges Overcome:
- Hardhat-compiled escrow contract for token swaps.
- Web2-to-Web3 bridge so non-crypto users can swap smoothly.
- Low-latency swap execution across multiple tokens.

### Breezefee — https://breezefee-32f69.web.app/
Badges: ![React](https://img.shields.io/badge/React-20232A?logo=react) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase) ![Tailwind](https://img.shields.io/badge/Tailwind-0EA5E9?logo=tailwindcss)

Architecture (Mermaid):
```mermaid
graph TD;
  Parent-->UI(React);
  UI-->Payments(Gateway);
  Payments-->Schools[(Onboarded Schools)];
  UI-->Data[(Firebase/Store)];
```
Challenges Overcome:
- Peak-term concurrency handled with responsive, idempotent payment submission.
- Clear parent-to-school receipt flows for term/session fees.
- Mobile-first checkout for guardians.

### Oloja Foundation — https://theolojafoundation.vercel.app
Badges: ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![Paystack](https://img.shields.io/badge/Paystack-1D1C3D?logo=paystack) ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)

Architecture (Mermaid):
```mermaid
graph TD;
  Donor-->UI(Next.js);
  UI-->Gateway(Paystack);
  UI-->CMS(Content & Campaigns);
  UI-->Edge(Vercel Edge);
```
Challenges Overcome:
- Multi-donor checkout with Paystack for recurring giving.
- Media and hero optimization for emerging-market bandwidth.
- Campaign pages structured for transparent impact reporting.

## Portfolio
- Live site: https://0hehaebib1.vercel.app
- Code: https://github.com/elshaddaioheha/0hehaebib1
