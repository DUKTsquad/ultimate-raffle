import { Box, Card, Container, Divider, Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { LOTTERY_CONTRACT_ADDRESS_R1, LOTTERY_CONTRACT_ADDRESS_R2, LOTTERY_CONTRACT_ADDRESS_R3 } from "../const/addresses";
import { ethers } from "ethers";
import AdminLotteryStatusCard_R1 from "../components/LotteryStatus/LotteryStatusR1";
import AdminTicketPriceCard_R1 from "../components/TicketPrice/TicketPriceR1";
import AdminRaffleWinnerCard_R1 from "../components/RaffleWinner/RaffleWinnerR1";
import AdminLotteryStatusCard_R2 from "../components/LotteryStatus/LotteryStatusR2";
import AdminTicketPriceCard_R2 from "../components/TicketPrice/TicketPriceR2";
import AdminRaffleWinnerCard_R2 from "../components/RaffleWinner/RaffleWinnerR2";
import AdminLotteryStatusCard_R3 from "../components/LotteryStatus/LotteryStatusR3";
import AdminTicketPriceCard_R3 from "../components/TicketPrice/TicketPriceR3";
import AdminRaffleWinnerCard_R3 from "../components/RaffleWinner/RaffleWinnerR3";

export default function Admin() {
    const {
        contract
    } = useContract(LOTTERY_CONTRACT_ADDRESS_R1 && LOTTERY_CONTRACT_ADDRESS_R2 && LOTTERY_CONTRACT_ADDRESS_R3);

    const {
        data: ticketCost,
        isLoading: ticketCostLoading
    } = useContractRead(contract, "ticketCost");

    const {
        data: contractBalance,
        isLoading: contractBalanceLoading
    } = useContractRead(contract, "getBalance");

    return (
        <Container maxW={"1440px"} py={8}>
            <Heading padding={5}>Raffle 1</Heading>
            <Flex flexDirection={"row"}>
                <AdminLotteryStatusCard_R1 />
                <Card p={4} mt={4} mr={10} w={"25%"}>
                    <Stack spacing={4}>
                        <AdminTicketPriceCard_R1 />
                        <Divider />
                        <Box>
                            <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>Contract Balance</Text>
                            {!contractBalanceLoading ? (
                                <Text fontSize={"xl"}>{ethers.utils.formatEther(contractBalance)} MATIC</Text>
                            ) : (
                                <Spinner />
                            )}
                        </Box>
                        <Web3Button
                            contractAddress={LOTTERY_CONTRACT_ADDRESS_R1}
                            action={(contract) => contract.call(
                                "withdrawBalance"
                            )}
                        >Withdraw Balance</Web3Button>   
                    </Stack>    
                </Card>
                <AdminRaffleWinnerCard_R1 />
            </Flex>
            <Heading padding={5}>Raffle 2</Heading>
            <Flex flexDirection={"row"}>
                <AdminLotteryStatusCard_R2 />
                <Card p={4} mt={4} mr={10} w={"25%"}>
                    <Stack spacing={4}>
                        <AdminTicketPriceCard_R2 />
                        <Divider />
                        <Box>
                            <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>Contract Balance</Text>
                            {!contractBalanceLoading ? (
                                <Text fontSize={"xl"}>{ethers.utils.formatEther(contractBalance)} MATIC</Text>
                            ) : (
                                <Spinner />
                            )}
                        </Box>
                        <Web3Button
                            contractAddress={LOTTERY_CONTRACT_ADDRESS_R2}
                            action={(contract) => contract.call(
                                "withdrawBalance"
                            )}
                        >Withdraw Balance</Web3Button>   
                    </Stack>    
                </Card>
                <AdminRaffleWinnerCard_R2 />
            </Flex>
            <Heading padding={5}>Raffle 3</Heading>
            <Flex flexDirection={"row"}>
                <AdminLotteryStatusCard_R3 />
                <Card p={4} mt={4} mr={10} w={"25%"}>
                    <Stack spacing={4}>
                        <AdminTicketPriceCard_R3 />
                        <Divider />
                        <Box>
                            <Text fontWeight={"bold"} mb={4} fontSize={"xl"}>Contract Balance</Text>
                            {!contractBalanceLoading ? (
                                <Text fontSize={"xl"}>{ethers.utils.formatEther(contractBalance)} MATIC</Text>
                            ) : (
                                <Spinner />
                            )}
                        </Box>
                        <Web3Button
                            contractAddress={LOTTERY_CONTRACT_ADDRESS_R2}
                            action={(contract) => contract.call(
                                "withdrawBalance"
                            )}
                        >Withdraw Balance</Web3Button>   
                    </Stack>    
                </Card>
                <AdminRaffleWinnerCard_R3 />
            </Flex>
        </Container>
    )
}