import { Address, AddressComputer, Mnemonic } from "@multiversx/sdk-core/out";

const addressComputer = new AddressComputer();

export function generateAddresses() {
    // addressess[shard] = Address[]
    const addresses: {
        address: string;
        mnemonic: string;
        privateKey: string;
    }[][] = [[], [], []];

    while (addresses.flatMap((address) => address).length < 9) {
        const mnemonic = Mnemonic.generate();
        const privateKey = mnemonic.deriveKey().hex();
        const address = new Address(mnemonic.getEntropy());
        const shard = addressComputer.getShardOfAddress(address);

        if (addresses[shard].length < 3) {
            addresses[shard].push({
                address: address.toBech32(),
                privateKey,
                mnemonic: mnemonic.toString(),
            });
        }
    }

    return addresses.reduce((addressObj, shardAddress, shard) => {
        addressObj[shard as 0 | 1 | 2] = shardAddress.map((address) => address);
        return addressObj;
    }, {} as { [key in 0 | 1 | 2]: (typeof addresses)[number] });
}
