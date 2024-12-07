#!/usr/bin/env node

import axios from "axios";
import fs from "fs";
import { generateAddresses } from "./generateAddresses";

(async () => {
    try {
        // Generate shard-aware addresses
        const addresses = generateAddresses();

        // Construct the faucet URL
        const url =
            "https://mvx-faucet.vercel.app/api/faucet?privKeys=" +
            Object.entries(addresses)
                .map(([, shardAddresses]) =>
                    shardAddresses.map(({ privateKey }) => privateKey)
                )
                .flat()
                .join(",");

        console.log("Requesting tokens from faucet...");

        // Request tokens from the faucet
        const { data } = await axios.get(url);

        // Validate faucet response
        if (!data.txHashes || data.txHashes.length === 0) {
            throw new Error(
                "Faucet response does not contain transaction hashes."
            );
        }

        // Output addresses and faucet response
        const result = {
            addresses,
            faucetResponse: data.txHashes,
        };

        console.log(JSON.stringify(result, null, 2));

        fs.writeFileSync(
            "faucet-response.json",
            JSON.stringify(result, null, 2)
        );
        console.log("Output saved to faucet-response.json");
    } catch (error: any) {
        console.error("Error:", error.message || error);
    }
})();
