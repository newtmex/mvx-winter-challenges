# **Token Issuance Script for MultiversX**

This CLI tool issues **fungible tokens** for the accounts generated in the first challenge of the MultiversX Winter Coding Challenge. It uses the **MultiversX SDK Core** to interact with the blockchain and automatically issues tokens with the specified properties for each account.

---

## **Features**

-   **Fungible Token Issuance**:

    -   Issues **100 million tokens** with 8 decimals for each account.
    -   Tickers are dynamically generated with the prefix `WINTER`.

-   **Shard-Aware Execution**:

    -   Issues tokens for accounts grouped by shards.

-   **Automatic Transaction Signing and Submission**:

    -   Uses private keys from the accounts generated in the first challenge to sign transactions.

-   **Developer-Friendly Output**:
    -   Logs transaction hashes to the console.
    -   Saves results (transaction hashes) to `tokens-issued.json` for verification.

---

## **Installation**

Ensure you have **Node.js** (v16 or later) installed.

Clone the repository and install the dependencies:

```bash
git clone https://github.com/newtmex/mvx-winter-challenges.git
cd packages/issue-tokens
yarn install
```

---

## **Usage**

### **1. Prepare Input Data**

The script expects a `wallets.json` file in the root directory, which should contain the accounts generated in the first challenge. The format should be:

```json
{
  "addresses": {
    "0": [
      {
        "privateKey": "privateKeyString1",
        "address": "address1"
      },
      ...
    ],
    "1": [...],
    "2": [...]
  }
}
```

### **2. Run the Script**
Execute the script with:

```bash
yarn start
```

### **3. Output**

-   The script logs transaction hashes to the console.
-   Results (including transaction hashes) are saved to `tokens-issued.json`.

Example output:

```json
[
    {
        "txHash": "hash1"
    },
    {
        "txHash": "hash2"
    },
    {
        "txHash": "hash3"
    }
]
```

---

## **Token Properties**

-   **Ticker**: `WINTER` (with shard and index suffix, e.g., `WINTER01`).
-   **Initial Supply**: 100 million tokens (100,000,000.00000000).
-   **Decimals**: 8.
-   **Roles**: `canAddSpecialRoles`, `canChangeOwner`, `canFreeze`, `canPause`, `canUpgrade`, `canWipe`.

---

## **Transaction Hashes**

The generated transaction hashes for each issued token will appear in `tokens-issued.json`. Verify these transactions on the MultiversX Devnet Explorer.

---

## **Troubleshooting**

1. **Error: Input file not found**:

    - Ensure the `wallets.json` file is present in the root directory.
    - Verify the file format and account details.

2. **Invalid transaction**:
    - Ensure the private keys in `wallets.json` correspond to funded accounts.

---

## **License**

This project is open-sourced under the MIT License.
