Here’s the README for your package, **`@challenges/shard-address`**:

---

# **@challenges/shard-address**

A CLI tool for generating shard-aware blockchain addresses and automating faucet requests on the **MultiversX Devnet network**. This package simplifies the process of creating accounts across all shards and requesting test tokens for them, providing developers with an efficient solution for blockchain testing.

---

## **Features**

-   **Shard-Aware Address Generation**:

    -   Generates **3 unique accounts per shard** (Shard 0, Shard 1, Shard 2).
    -   Ensures deterministic shard mapping for generated addresses.

-   **Automated Faucet Requests**:

    -   Requests test tokens from the faucet for all generated accounts in a single step.
    -   Returns transaction hashes for verification.

-   **Developer-Friendly Output**:
    -   Displays addresses, private keys, and transaction hashes in a clean JSON format.
    -   Saves the output to a file for reuse.

---

## **Installation**

Install the package globally via npm:

```bash
npm install -g @challenges/shard-address
```

Or, run it directly with `npx`:

```bash
npx @challenges/shard-address
```

---

## **Usage**

### **1. Generate Addresses and Request Tokens**

Run the CLI to generate addresses and request tokens:

```bash
npx @challenges/shard-address
```

The output includes:

-   **Generated addresses** grouped by shard.
-   **Private keys** for each address (This is for testing purposes only, do not use on mainnet!).
-   **Transaction hashes** for the faucet requests.

---

## **Output Example**

Below is a sample output from the tool, including transaction hashes and addresses:

```json
{
    "addresses": {
        "0": [
            {
                "address": "erd1s6whaznv3vxmjqqn5stu7wtqqqery8xt5ax43wl5jywp8qrdsrvqcaeq6f",
                "privateKey": "c1c91510dd485dff5d9afa88f50285b192d7a41880fe16fe886480e05c22789c",
                "mnemonic": "violin opera insect ugly light typical sustain language manage toddler child public rally ranch arctic stumble size ridge excuse risk frog march penalty sport"
            },
            {
                "address": "erd1x4j6e9nmdyhlev0lcufldmfdpyeaz5eav7thr0gsrqtuvkxs3yjqkx8nd2",
                "privateKey": "7d736fda02b3bbcbf782dd5661d9f5539d597d5a244fbd4b9e2f129c651f43e2",
                "mnemonic": "head inform this unhappy brand sound engage resource lawn engage program switch armor chronic beauty keen ankle valve palace flat outer guard royal mechanic"
            },
            {
                "address": "erd1d9u0zth0hr3yh9szhk0t969gkqnyjl0unkjwl4jmezllf8h78wqqjy9n5l",
                "privateKey": "fa4af3a13e4165e7de2c22640df40f11c3db3291f652846debd2925b22314f2f",
                "mnemonic": "simple again own sister romance bus segment excess devote pen act ivory lion clinic aspect dose unable capital fitness snow defy harsh stable confirm"
            }
        ],
        "1": [
            {
                "address": "erd10xt8y56mvpge9gpn6skerdkfnhy507t9rvu9gqyqudx59jf7er3sqcf7gc",
                "privateKey": "ce62c79f4b6228c20ab864ce3f08b797ffca4c59309672854a0b167f32013137",
                "mnemonic": "seven protect drama correct fluid sweet tone area erode cave essence olive park used exile trap duck deer napkin crawl found spread nation person"
            },
            {
                "address": "erd16tgcg48v3mj44myfy6msu0443fyrgw7epk6y5xevvj9c28nntu7svsl3hz",
                "privateKey": "975fe54f64303b1dc0379ae5c2fbc958cf2cabdb54ef69c258f9d4b57adc4453",
                "mnemonic": "rabbit room snack gate wide original narrow devote oblige chef twelve angry junior coil sadness castle trend conduct menu man sun afraid outdoor assault"
            },
            {
                "address": "erd1wmqxvn2phpj02d3v2dgsrqvkutyh4ycxxa6nunylpjaeyvljfjxsqlxwc3",
                "privateKey": "b1c1bbb633bb775cf4e779966e4a3609d4169d9120b6ec05354bbf99a73e6ca1",
                "mnemonic": "idle jealous endorse pen reform column behave cloth term flight million avoid motor nuclear various topple jazz fragile produce audit target machine circle cigar"
            }
        ],
        "2": [
            {
                "address": "erd1vpk49clg8nwgkzteahhzm3nqxst69tqs0z4su5554qagwlmtm43qzntp4a",
                "privateKey": "8d3ab1632298b135acbab3f3730e568193d4ccddbe177a754604c7994b76f359",
                "mnemonic": "uncover renew better rail magic stuff finger when snow border series already chase earth lion accident soccer tired tired display source luxury purity twice"
            },
            {
                "address": "erd17ka3st74ugcll89ql0pwkv0fnf55a88f90ut8vmvs3mgd47xuuhq5rg9fl",
                "privateKey": "3c6c1fb80e324fc0b6cbeb663b245b75f285abd47d011f6ee09cfea46b54bca6",
                "mnemonic": "power loyal dust castle song cave engine stumble fit enact crunch cinnamon verify december betray range guide puppy sniff jungle body reward relax prison"
            },
            {
                "address": "erd1rxww6fdpg9mqtguyvnqujmmqf6w6asq58mkpxp9z730rqjef2gnqmxshw6",
                "privateKey": "984287a28ec9acfb5bc6031395952dcbdcd7ce5a02d481d8c11420863bb25b23",
                "mnemonic": "stone base safe disorder inhale resemble tennis square middle hurry nation patrol guitar purpose unknown card hood robust elder radio neither verb hamster chronic"
            }
        ]
    },
    "faucetResponse": [
        {
            "hash": "34d9f513d7971802edd8731409d151f0ca4d9667c9e151446bbb790557e4015f",
            "address": "erd1s6whaznv3vxmjqqn5stu7wtqqqery8xt5ax43wl5jywp8qrdsrvqcaeq6f"
        },
        {
            "hash": "3ab10b6b6dd68f92811c6d375b75b0ca3dd6036460ae498fda87958a21171589",
            "address": "erd1x4j6e9nmdyhlev0lcufldmfdpyeaz5eav7thr0gsrqtuvkxs3yjqkx8nd2"
        },
        {
            "hash": "68c090e442db0b971642219bbd51a1568154ede3a6689c2d0de489a8fb0f3d84",
            "address": "erd1d9u0zth0hr3yh9szhk0t969gkqnyjl0unkjwl4jmezllf8h78wqqjy9n5l"
        },
        {
            "hash": "cd7215c15ea05df91a3fd3cb186eb06027aa7619ca567e113f2478b6688970d0",
            "address": "erd10xt8y56mvpge9gpn6skerdkfnhy507t9rvu9gqyqudx59jf7er3sqcf7gc"
        },
        {
            "hash": "4a1fa78e506e8e678055e0a411be957d7183b91c2baa43d171ea68aebb6428da",
            "address": "erd16tgcg48v3mj44myfy6msu0443fyrgw7epk6y5xevvj9c28nntu7svsl3hz"
        },
        {
            "hash": "99b49aeb7d6a3d115ddf17c7bee4fd89fb774f26d4bb203bbcfc82c489ef42bc",
            "address": "erd1wmqxvn2phpj02d3v2dgsrqvkutyh4ycxxa6nunylpjaeyvljfjxsqlxwc3"
        },
        {
            "hash": "4d4a19f9f397b122d9a185918242201d99ff31538a6249bdc5ebe4dd86f0fc7b",
            "address": "erd1vpk49clg8nwgkzteahhzm3nqxst69tqs0z4su5554qagwlmtm43qzntp4a"
        },
        {
            "hash": "001b728b872230dfee43f4c4235f94b79dc5460371587840d8273562b9cda0a0",
            "address": "erd17ka3st74ugcll89ql0pwkv0fnf55a88f90ut8vmvs3mgd47xuuhq5rg9fl"
        },
        {
            "hash": "ae33eb00248b82cfdf2b731cf548fc9d6f74950730781ea9536b982422c1555e",
            "address": "erd1rxww6fdpg9mqtguyvnqujmmqf6w6asq58mkpxp9z730rqjef2gnqmxshw6"
        }
    ]
}
```

---

## **Transaction Hashes**

Here are the devnet transaction hashes for the generated accounts:

-   **Shard 0**:
    -   [`34d9f513d7971802edd8731409d151f0ca4d9667c9e151446bbb790557e4015f`](https://devnet-explorer.multiversx.com/transactions/34d9f513d7971802edd8731409d151f0ca4d9667c9e151446bbb790557e4015f)
    -   [`3ab10b6b6dd68f92811c6d375b75b0ca3dd6036460ae498fda87958a21171589`](https://devnet-explorer.multiversx.com/transactions/3ab10b6b6dd68f92811c6d375b75b0ca3dd6036460ae498fda87958a21171589)
    -   [`68c090e442db0b971642219bbd51a1568154ede3a6689c2d0de489a8fb0f3d84`](https://devnet-explorer.multiversx.com/transactions/68c090e442db0b971642219bbd51a1568154ede3a6689c2d0de489a8fb0f3d84)
-   **Shard 1**:
    -   [`cd7215c15ea05df91a3fd3cb186eb06027aa7619ca567e113f2478b6688970d0`](https://devnet-explorer.multiversx.com/transactions/cd7215c15ea05df91a3fd3cb186eb06027aa7619ca567e113f2478b6688970d0)
    -   [`4a1fa78e506e8e678055e0a411be957d7183b91c2baa43d171ea68aebb6428da`](https://devnet-explorer.multiversx.com/transactions/4a1fa78e506e8e678055e0a411be957d7183b91c2baa43d171ea68aebb6428da)
    -   [`99b49aeb7d6a3d115ddf17c7bee4fd89fb774f26d4bb203bbcfc82c489ef42bc`](https://devnet-explorer.multiversx.com/transactions/99b49aeb7d6a3d115ddf17c7bee4fd89fb774f26d4bb203bbcfc82c489ef42bc)
-   **Shard 2**:
    -   [`4d4a19f9f397b122d9a185918242201d99ff31538a6249bdc5ebe4dd86f0fc7b`](https://devnet-explorer.multiversx.com/transactions/4d4a19f9f397b122d9a185918242201d99ff31538a6249bdc5ebe4dd86f0fc7b)
    -   [`001b728b872230dfee43f4c4235f94b79dc5460371587840d8273562b9cda0a0`](https://devnet-explorer.multiversx.com/transactions/001b728b872230dfee43f4c4235f94b79dc5460371587840d8273562b9cda0a0)
    -   [`ae33eb00248b82cfdf2b731cf548fc9d6f74950730781ea9536b982422c1555e`](https://devnet-explorer.multiversx.com/transactions/ae33eb00248b82cfdf2b731cf548fc9d6f74950730781ea9536b982422c1555e)

---

## **License**

This project is open-sourced under the MIT License.
