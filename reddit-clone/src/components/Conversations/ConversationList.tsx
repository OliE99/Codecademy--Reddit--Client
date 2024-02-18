import { Box } from "@chakra-ui/react";
import { Community } from "../../atoms/communitiesAtom";
import ConversationItem from "./ConversationItem";

type Props = {
    chatUsers: Community[];
};

function ConversationList({ chatUsers }: Props) {
    return (
        <Box
            width={{ base: "100%", md: "400px" }}
            position="relative"
            height="100%"
            overflow="scroll"
        >
            {chatUsers.map((user) => (
                <ConversationItem key={user.id} user={user} />
            ))}
        </Box>
    );
}

export default ConversationList;