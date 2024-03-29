import { useGraphClient } from "@/api/microsoftGraph/GraphClientContext";
import { TodoItem } from "@/api/microsoftGraph/types";
import { useMicrosoftGraphApi } from "@/api/microsoftGraph/useMicrosoftGraphApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";

import { ReactNode, useState } from "react";
import { BounceLoader } from "react-spinners";

interface TodoCardProps {
    children?: ReactNode;
}

export const TodoCard = ({ children }: TodoCardProps) => {
    return (<Card className="shadow-sm">
        {children}
    </Card>
    )
};
interface HeaderProps { text: string, button?: ReactNode, isLoading: boolean }
TodoCard.Header = ({ text, button, isLoading }: HeaderProps) => {
    return (
        <CardHeader>
            <CardTitle className="text-xl flex">
                <span>
                    {text}
                </span>
                {isLoading && <BounceLoader className="my-auto ml-2" data-testid="public-transportation-card-spinner" speedMultiplier={0.5} size={20} color="black" />}
            </CardTitle>
            {button}
        </CardHeader>
    )
}

interface ContentProps { children?: ReactNode }
TodoCard.Content = ({ children }: ContentProps) => {
    return (
        <CardContent>
            {children}
        </CardContent>
    )
}

interface ItemProps {
    todo: TodoItem
}
export const TodoCardItem = ({ todo }: ItemProps) => {
    const [status, setStatus] = useState<boolean>(todo.status === 'completed')
    const { graphClient } = useGraphClient();
    const { completeTask } = useMicrosoftGraphApi(graphClient);
    const handleCompleteTask = () => {
        setStatus(true);
        setTimeout(() => {
            completeTask(todo.id);
        }, 700);
    }
    return (
        <div onClick={handleCompleteTask} className="flex justify-between p-4 mb-2 border rounded-lg hover:bg-stone-100 cursor-pointer">
            <Label className="my-auto" htmlFor={`todo-item-${todo.id}`} >{todo.title}</Label>
            <Checkbox checked={status} id={`todo-item-${todo.id}`} />
        </div>
    )
}