import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
const Comment = ({ comment, username,likes,createdAt,avatarSrc}) => {
    const [liked, setLiked] = useState(false);
	return (
        
		<>
			<Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src={avatarSrc} size={"sm"} />
				<Flex gap={1} w={"full"} flexDirection={"column"}>
					<Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
						<Text fontSize='sm' fontWeight='bold'>
							{username}
						</Text>
                        <Flex gap={4} alignItems={"center"}>
							<Text fontStyle={"sm"} color={"gray.light"}>
								{createdAt}
							</Text>
							<BsThreeDots />
						</Flex>
					</Flex>
					<Text>{comment}</Text>
                    <Actions liked={liked} setLiked={setLiked} />
                    <Text color={"gray.light"} fontSize='sm'>
						{likes+(liked?1:0)} likes
						</Text>
				</Flex>
			</Flex>
			
		</>
	);
};

export default Comment;