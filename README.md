# **MultiversX Winter Coding Challenge Workspace**

Welcome to my **MultiversX Winter Coding Challenge Workspace**! This repository is dedicated to solving challenges presented in the [MultiversX Winter Coding Challenge](https://multiversx.notion.site/multiversx-winter-coding-challenge). It provides a structured and efficient environment for developing, testing, and deploying innovative tools and packages tailored to the MultiversX ecosystem.

---

## **About the MultiversX Winter Coding Challenge**

The **MultiversX Winter Coding Challenge** is an initiative aimed at fostering creativity and innovation in the MultiversX ecosystem. Developers from around the world are encouraged to build tools, libraries, and solutions that address real-world needs within the blockchain ecosystem.

Check out the challenge details and join the initiative [here](https://multiversx.notion.site/multiversx-winter-coding-challenge).

---

## **Workspace Organisation**

This workspace is designed to support modular development with **Yarn Workspaces**, enabling the creation and management of multiple packages. Here's how the workspace is structured:

```
/
├── package.json         // Root configuration for the Yarn workspace
├── packages/            // Directory for all challenge-related packages
│   ├── shard-address/   // Package for the first challenge
│   ├── [other-packages] // Additional packages for other challenges
└── README.md            // Documentation for the workspace
```

### **How the Workspace is Organised**
- **Root Directory**:
  - Contains the Yarn workspace configuration and dependencies shared across all packages.
- **`packages/` Directory**:
  - Each challenge is implemented as a separate package within this directory.
  - Packages are modular, allowing for independent development, testing, and publishing.

---

## **First Challenge: [Shard-Aware Address Generator](./packages/shard-address)**

The first challenge is focused on creating a tool that:
1. **Generates three accounts per shard** (Shard 0, Shard 1, and Shard 2).
2. **Requests tokens from the faucet** for the generated accounts.
3. Provides proof of token requests through transaction hashes.

This challenge demonstrates the power of automation in blockchain development by reducing the manual steps needed to interact with the MultiversX testnet or devnet.

You can find the implementation of the first challenge in the [`packages/shard-address`](./packages/shard-address) directory.

---

## **Contributing**

Feel free to contribute to this workspace by:
- Reporting issues or suggesting enhancements.


---

## **Links**
- [MultiversX Winter Coding Challenge Overview](https://multiversx.notion.site/multiversx-winter-coding-challenge)
- [First Challenge: Shard-Aware Address Generator](./packages/shard-address)
