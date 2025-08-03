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

1. **Clone the repository:**
 ```sh
   git clone https://github.com/YOUR_USERNAME/supportcreators.git
   cd supportcreators
 ```

2. **Install dependencies:**
   
   ```sh
   npm install
   #or
   yarn install
   ```
3. **Set up environment variables:**

    Create a .env.local file in the root directory and add the necessary environment variables (example below):

    ```sh
    MONGODB_URI=your_mongodb_connection_string
   
    GITHUB_ID=<Github_ID>
    GITHUB_SECRET=<Github_Secret>

    GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
    GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET>

    MONGODB_URI=<YOUR_MONGODB_URI>

    NEXT_PUBLIC_URL=<YOUR_NEXT_PUBLIC_URL>
    NEXTAUTH_URL=<YOUR_NEXTAUTH_URL>
    NEXTAUTH_SECRET=<YOUR_SECRET>
    ```
 4. **Getting Started**

    First, run the development server:

    ```sh
        npm run dev
        # or
        yarn dev
        # or
        pnpm dev
        # or
        bun dev
     ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
