# Hi, I'm Oheha Ebibi

Software engineer & full-stack developer. I build high-concurrency products, resilient database layers, and animated, performant interfaces.

[![Portfolio](https://img.shields.io/badge/Portfolio-0hehaebib1.vercel.app-111827?style=for-the-badge&logo=vercel)](https://0hehaebib1.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ojeka-ebibi)
[![GitHub](https://img.shields.io/badge/GitHub-@elshaddaioheha-111827?style=for-the-badge&logo=github)](https://github.com/elshaddaioheha)
[![Email](https://img.shields.io/badge/Email-hello%40oheha.dev-4338CA?style=for-the-badge&logo=minutemailer)](mailto:elshaddaioheha@gmail.com)

## Skills

- Frontend: JavaScript, React, Tailwind, Framer Motion
- Backend: Node.js, Express
- Databases: Supabase, Firebase, MongoDB
- DevOps & Blockchain: Docker, Hedera SDK

## Featured Projects

### Diamond Dreams Group — https://diamonddreamsgroup.com
Badges: ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript) ![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis) ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel)

Architecture (Mermaid):
```mermaid
graph TD;
  User-->Edge(Vercel Edge);
  Edge-->App(Next.js / TS);
  App-->Cache[(Redis Sessions)];
  App-->Storage[(TEBI LMS Video Storage)];
```
Challenges Overcome:
- Unified event planning platform and integrated TEBI LMS, handling 1k+ concurrent learners with Redis session caching.
- Tuned video bitrate for low-data networks to ensure smooth course streaming.

### Swen-Autos — https://swen-autos.vercel.app
Badges: ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![Hedera SDK](https://img.shields.io/badge/Hedera-SDK-000000) ![Tailwind](https://img.shields.io/badge/Tailwind-0EA5E9?logo=tailwindcss)

Architecture (Mermaid):
```mermaid
graph TD;
  Buyer-->Web(Next.js UI);
  Seller-->Web;
  Web-->API(Node/TS);
  Web-->Ledger[(Hedera SDK)];
  API-->Payments[(Fiat & Crypto Rails)];
```
Challenges Overcome:
- Integrated Hedera listing validation to ensure listing authenticity.
- Multi-rail checkout (fiat + crypto) with escrow security features.
- Search/listing performance tuned for low-bandwidth devices.

### Agbejo — https://agbejo.vercel.app
Badges: ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs) ![Solidity](https://img.shields.io/badge/Solidity-363636?logo=solidity) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)

Architecture (Mermaid):
```mermaid
graph TD;
  User-->UI(Next.js UI);
  UI-->Svc(Node);
  Svc-->Contracts[(Smart Contracts)];
  Svc-->Auth(Escrow Onboarding);
```
Challenges Overcome:
- Enforced automated escrow swaps on-chain using secure smart contracts.
- Low-latency verification and transaction handling.

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
