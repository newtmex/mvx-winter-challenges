#!/usr/bin/env node

import { Address, AddressComputer, Mnemonic } from "@multiversx/sdk-core/out";

const addressComputer = new AddressComputer();

// addressess[shard] = Address[]
const addresses: Address[][] = [[], [], []];

while (addresses.flatMap((address) => address).length < 9) {
    const address = new Address(Mnemonic.generate().getEntropy());
    const shard = addressComputer.getShardOfAddress(address);

    if (addresses[shard].length < 3) {
        addresses[shard].push(address);
    }
}

const addressObj = addresses.reduce((addressObj, shardAddress, shard) => {
    addressObj[shard as 0 | 1 | 2] = shardAddress.map((address) =>
        address.toBech32()
    );
    return addressObj;
}, {} as { [key in 0 | 1 | 2]: string[] });

console.log(addressObj);
