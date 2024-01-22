import { TodoCard } from "./TodoCard"
import { TodoCardItem } from "./TodoCard/TodoCard"


export const TodoWidget = () => {
    
    return(
        <TodoCard>
            <TodoCard.Header text="Todos"/>
            <TodoCard.Content>
                <TodoCardItem todo={{text: 'Handla', completed: true}}/>
                <TodoCardItem todo={{text: 'Pussa snessan', completed: false}}/>
                <TodoCardItem todo={{text: 'Hämta SL manuelt', completed: false}}/>
                <TodoCardItem todo={{text: 'Klappa missen', completed: false}}/>
                <TodoCardItem todo={{text: 'Tvätta', completed: true}}/>
            </TodoCard.Content>
        </TodoCard>
    )
}