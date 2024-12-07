import { AddressComputer, Mnemonic } from "@multiversx/sdk-core/out";

const addressComputer = new AddressComputer();

export function generateAddresses() {
    // Initialize shard-based address storage
    const addressesByShard: {
        [key in 0 | 1 | 2]: {
            address: string;
            mnemonic: string;
            privateKey: string;
        }[];
    } = { 0: [], 1: [], 2: [] };

    while (Object.values(addressesByShard).flat().length < 9) {
        // Generate a new mnemonic and derive private key and address
        const mnemonic = Mnemonic.generate();
        const privateKey = mnemonic.deriveKey();
        const address = privateKey.generatePublicKey().toAddress();
        const shard = addressComputer.getShardOfAddress(address) as 0 | 1 | 2;

        // Add the address to the corresponding shard if not full
        if (addressesByShard[shard].length < 3) {
            addressesByShard[shard].push({
                address: address.toBech32(),
                privateKey: privateKey.hex(),
                mnemonic: mnemonic.toString(),
            });
        }
    }

    // Ensure each shard has exactly 3 addresses
    Object.entries(addressesByShard).forEach(([shard, addresses]) => {
        if (addresses.length !== 3) {
            throw new Error(`Shard ${shard} does not have exactly 3 addresses`);
        }
    });

    return addressesByShard;
}
