import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";

import { ReactNode } from "react";

interface TodoCardProps {
    children?: ReactNode;
}

export const TodoCard = ({ children }: TodoCardProps) => {
    return (<Card className="shadow-sm">
        {children}
    </Card>
    )
};
interface HeaderProps { text: string }
TodoCard.Header = ({ text }: HeaderProps) => {
    return (
        <CardHeader>
            <CardTitle className="text-xl">
                {text}
            </CardTitle>
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

type Todo = { text: string, completed: boolean }
interface ItemProps {
    todo: Todo
}
export const TodoCardItem = ({ todo }: ItemProps) => {
    return (
        <div className="flex justify-between p-4 mb-2 border rounded-lg hover:bg-stone-100 ">
            <Label className="my-auto" htmlFor="todo" >{todo.text}</Label>
            <Checkbox id="todo " />
        </div>
    )
}