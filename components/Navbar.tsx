import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Link from "next/link";
import { LOTTERY_CONTRACT_ADDRESS_R1, LOTTERY_CONTRACT_ADDRESS_R2 } from "../const/addresses";

export default function Navbar() {
    const address = useAddress();

    const {
        contract
    } = useContract(LOTTERY_CONTRACT_ADDRESS_R1 && LOTTERY_CONTRACT_ADDRESS_R2);

    const {
        data: admin,
        isLoading: adminLoading
    } = useContractRead(contract, "admin");

    return (
        <Container maxW={"1440px"} py={8}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link href={"/"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>Raffle App</Text>
                </Link>
                <Flex>
                    <Link href={"/"}>
                        <Text fontWeight={"bold"} mr={10}>Raffle Home</Text>
                    </Link>
                    <Link href={"https://bucolic-faun-a6318a.netlify.app/"}>
                        <Text fontWeight={"bold"} mr={10}>Cash In</Text>
                    </Link>
                </Flex>
                <Flex flexDirection={"row"} alignItems={"center"}>
                    {!adminLoading && address === admin && (
                        <Link href={"/admin"}>
                            <Text fontWeight={"bold"} mr={10}>Admin</Text>
                        </Link>
                    )}
                    <ConnectWallet />
                </Flex>
            </Flex>
        </Container>
    )
}