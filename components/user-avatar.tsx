import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
export const UserAvatar = () => {
    const {user} = useUser();
    return(
        <Avatar className="h-10 w-10">
            <AvatarImage src={user?.profileImageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    )
}