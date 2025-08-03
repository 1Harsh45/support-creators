# SupportCreators

[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://support-creators.vercel.app/)

**SupportCreators** is a full-stack MERN (MongoDB, Express, React, Node.js) crowdfunding platform that allows fans and followers to support their favorite developers, content creators, and influencers by contributing small donations.

---

## 🚀 Live Site

🌐 [Visit Now](https://support-creators.vercel.app/)

---

## 🎯 Project Objective

SupportCreators empowers creators to fund their work by offering a seamless platform where supporters can:

- Discover their favorite creators.
- Send financial support using secure payment gateways.
- Connect and engage directly.

---

## ✨ Key Features

- 🔐 **OAuth Authentication** via GitHub and Google.
- 💳 **Payment Integration** using Razorpay (Test Mode).
- 🛡️ **Secure Data Handling** with MongoDB Atlas.
- 📊 **Creator Dashboard** to manage support and funding.
- 📜 **Pages Included**:
  - Home
  - About Us
  - Contact
  - Privacy Policy
  - Terms & Conditions
  - Cancellation & Refund Policy

---

## 🛠️ Tech Stack

| Technology      | Purpose                              |
|-----------------|---------------------------------------|
| MongoDB Atlas   | Cloud-based NoSQL database            |
| Express.js      | Backend server framework              |
| React.js        | Frontend UI framework (with Next.js)  |
| Node.js         | Server environment                    |
| NextAuth        | Authentication with GitHub & Google   |
| Razorpay        | Payment processing (India-focused)    |
| Tailwind CSS    | Modern, utility-first CSS framework   |
| Vercel          | Hosting platform for frontend/backend |
| GitHub Actions  | Deployment and version control        |

---

## 🧑‍💻 Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/supportcreators.git
cd supportcreators

npm install

touch .env.local

# MongoDB
MONGODB_URI=your_mongodb_atlas_uri

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Razorpay
NEXT_PUBLIC_KEY_ID=your_razorpay_key_id
KEY_SECRET=your_razorpay_key_secret

# NextAuth Config
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Site URL
NEXT_PUBLIC_URL=http://localhost:3000

npm run dev
