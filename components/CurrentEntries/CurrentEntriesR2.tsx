import { Card, Container, Spinner } from "@chakra-ui/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { LOTTERY_CONTRACT_ADDRESS_R2 } from "../../const/addresses";
import EntryCardR2 from "../EntryCards/EntryCardR2";

export default function CurrentEntries() {
    const {
        contract
    } = useContract(LOTTERY_CONTRACT_ADDRESS_R2);

    const {
        data: entries,
        isLoading: entriesLoading
    } = useContractRead(contract, "getPlayers");

    return (
        <Container py={8}>
            {!entriesLoading ? (
                entries.map((entry: any, index: number) => (
                    <EntryCardR2
                        key={index}
                        walletAddress={entry}
                    />
                ))
            ) : (
                <Spinner />
            )}
        </Container>
    )
}