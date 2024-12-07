#!/usr/bin/env node

import axios from "axios";
import { generateAddresses } from "./generateAddresses";

const addresses = generateAddresses();

const url =
    "https://mvx-faucet.vercel.app/api/faucet?privKeys=" +
    Object.entries(addresses)
        .map(([, shardAddressess]) =>
            shardAddressess.map(({ privateKey }) => privateKey)
        )
        .join(",");

axios
    .get(url)
    .then(({ data: { txHashes } }) => {
        console.log(
            JSON.stringify(
                {
                    addresses,
                    faucetResponse: txHashes,
                },
                null,
                2
            )
        );
    })
    .catch((e) => console.log("Error: ", e));
