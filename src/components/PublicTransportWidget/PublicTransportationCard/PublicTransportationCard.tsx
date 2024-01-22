import {BounceLoader} from "react-spinners";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../ui/card"
import { Button } from "@/components/ui/button"
import { Transport } from "@/api/publicTransport/types";
import { DepartureTable } from "../../DepartureTable";

interface PublicTransportationCardProps {
    children?: React.ReactNode;
}

export const PublicTransportationCard = ({ children }: PublicTransportationCardProps) => {
    return (
        <Card className="shadow-m">
            {children}
        </Card>
    )
};

interface HeaderProps { text: string, lastUpdated?: Date | undefined, isLoading: boolean, refetch: () => Promise<void> }
PublicTransportationCard.Header = (props: HeaderProps) => {
    return (
        <CardHeader data-testid="public-transportation-card-header">
            <CardTitle className="flex align-middle justify-between">
                <span className="flex align-middle">
                    <span className="my-auto mr-2 text-xl"> {props.text}</span>
                    <Button className="ml-2 my-auto" onClick={props.refetch}></Button>
                </span>
                {props.lastUpdated &&
                    <span className="my-auto mr-2 text-sm">
                        Last updated: {props.lastUpdated.toLocaleTimeString()}
                    </span>}
                <BounceLoader className="my-auto" data-testid="public-transportation-card-spinner" loading={props.isLoading} speedMultiplier={0.5} size={20} color="black" />
            </CardTitle>
        </CardHeader>)
};

interface ContentProps { info: Transport[] | undefined }
PublicTransportationCard.Content = (props: ContentProps) => {
    return (
        <CardContent className="py-2">
            <DepartureTable data={props.info ?? []} />
        </CardContent>
    )
};