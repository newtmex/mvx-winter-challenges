#!/usr/bin/env node

import fs from "fs";
import {
    Account,
    ProxyNetworkProvider,
    TransactionsFactoryConfig,
    UserSecretKey,
    TokenManagementTransactionsFactory,
    TransactionComputer,
} from "@multiversx/sdk-core";

// Constants
const NETWORK_PROVIDER = "https://devnet-gateway.multiversx.com";
const TOKEN_PREFIX = "WINTER";
const TOKEN_SUPPLY = 100_000_000_00000000n; // 100M with 8 decimals
const DECIMALS = 8n;

const factoryConfig = new TransactionsFactoryConfig({ chainID: "D" });
const tokenManagementTxFactory = new TokenManagementTransactionsFactory({
    config: factoryConfig,
});

// Initialize provider
const apiProvider = new ProxyNetworkProvider(NETWORK_PROVIDER);

// Read addresses and private keys from the first challenge
const inputFile = "wallets.json";

if (!fs.existsSync(inputFile)) {
    console.error(`Error: Input file ${inputFile} not found!`);
    process.exit(1);
}

const data = JSON.parse(fs.readFileSync(inputFile, "utf-8"));
const accounts = data.addresses;

// Function to issue a token for an account
async function issueToken(
    account: { privateKey: string; address: string },
    shardIndex: number,
    index: number
) {
    try {
        // Initialize account
        const userSecretKey = UserSecretKey.fromString(account.privateKey);
        const sender = userSecretKey.generatePublicKey().toAddress();

        const tokenName = `${TOKEN_PREFIX}${shardIndex}${index}`.toUpperCase();

        const tokenTx =
            tokenManagementTxFactory.createTransactionForIssuingFungible({
                sender,
                tokenName,
                tokenTicker: TOKEN_PREFIX,
                numDecimals: DECIMALS,
                canAddSpecialRoles: true,
                canChangeOwner: true,
                canFreeze: true,
                canPause: true,
                canUpgrade: true,
                canWipe: true,
                initialSupply: TOKEN_SUPPLY,
            });

        // Sign and send transaction
        const senderOnNetwork = await apiProvider.getAccount(sender);
        const senderAcccount = new Account(sender);
        senderAcccount.update(senderOnNetwork);

        const computer = new TransactionComputer();

        tokenTx.nonce = BigInt(senderAcccount.nonce.valueOf());
        // Must be last
        tokenTx.signature = userSecretKey.sign(
            computer.computeBytesForSigning(tokenTx)
        );

        const txHash = await apiProvider.sendTransaction(tokenTx);

        console.log(`Transaction hash: ${txHash}`);
        return { txHash };
    } catch (error: any) {
        console.error(
            `Error issuing token for ${account.address}:`,
            error.message || error
        );
    }
}

// Main logic
(async function main() {
    const results: any[] = [];

    for (const shardIndex in accounts) {
        const shardAccounts = accounts[shardIndex];
        for (const [index, account] of shardAccounts.entries()) {
            console.log(
                `Issuing token for account in Shard ${shardIndex} - ${account.address}`
            );
            const result = await issueToken(
                account,
                parseInt(shardIndex),
                index
            );
            if (result) results.push(result);
        }
    }

    // Save results
    fs.writeFileSync("tokens-issued.json", JSON.stringify(results, null, 2));
    console.log(
        "Token issuance completed. Results saved to tokens-issued.json"
    );
})();
