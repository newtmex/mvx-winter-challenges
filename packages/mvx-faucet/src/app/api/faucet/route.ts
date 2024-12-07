import {
    Account,
    ApiNetworkProvider,
    TransactionComputer,
    TransactionsFactoryConfig,
    TransferTransactionsFactory,
    UserSecretKey,
} from "@multiversx/sdk-core/out";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;

    const privKeys: string[] = (searchParams.get("privKeys") ?? "").split(",");
    if (!privKeys.length) {
        return NextResponse.json(
            { message: "Invalid Request" },
            { status: 400 }
        );
    }

    const apiProvider = new ApiNetworkProvider(
        "https://devnet-api.multiversx.com",
        { clientName: "mvx-faucet" }
    );

    const txHashes: { address: string; hash: string }[] = [];
    const factoryConfig = new TransactionsFactoryConfig({ chainID: "D" });
    const factory = new TransferTransactionsFactory({ config: factoryConfig });

    const faucetSigner = UserSecretKey.fromPem(process.env.PRIV_KEY!);
    const sender = faucetSigner.generatePublicKey().toAddress();

    const txs = privKeys.map((key) => {
        const receiver = UserSecretKey.fromString(key)
            .generatePublicKey()
            .toAddress();

        return factory.createTransactionForNativeTokenTransfer({
            sender,
            receiver,
            nativeAmount: 5_000_000_000_000_000n,
        });
    });

    const senderOnNetwork = await apiProvider.getAccount(sender);
    const senderAcccount = new Account(sender);
    senderAcccount.update(senderOnNetwork);

    const computer = new TransactionComputer();

    for (const tx of txs) {
        senderAcccount.incrementNonce();

        tx.nonce = BigInt(senderAcccount.nonce.valueOf());
        // Must be last
        tx.signature = faucetSigner.sign(computer.computeBytesForSigning(tx));

        const hash = await apiProvider.sendTransaction(tx);

        txHashes.push({ hash, address: tx.receiver });
    }

    return NextResponse.json({ txHashes });
}
