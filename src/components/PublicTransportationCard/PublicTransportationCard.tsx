import { Transport, TransportDataObject } from "../../api/publicTransport/types";
import { BounceLoader, FadeLoader } from "react-spinners";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../@/components/ui/card";

interface PublicTransportationCardProps {
    children?: React.ReactNode;
}

export const PublicTransportationCard = ({ children }: PublicTransportationCardProps) => {
    return (
        <Card className="shadow-md">
            {children}
        </Card>
    )
};

interface HeaderProps { text: string, lastUpdated?: Date | undefined, isLoading: boolean }
PublicTransportationCard.Header = (props: HeaderProps) => {    
    return (
        <CardHeader data-testid="public-transportation-card-header">
            <CardTitle className="flex align-middle">
                <div className="flex justify-end">
                    <span className="my-auto mr-2 text-xl">
                        {props.text}
                    </span>
                    {props.lastUpdated &&
                        <span className="my-auto mr-2 text-md font-bold">
                            Last updated: {props.lastUpdated.toLocaleTimeString()}
                        </span>}
                </div>
                <BounceLoader className="my-auto" data-testid="public-transportation-card-spinner" loading={props.isLoading} speedMultiplier={0.5} size={20} color="black" />
            </CardTitle>
        </CardHeader>)
};

interface ContentProps { info: Transport[] | undefined }
PublicTransportationCard.Content = (props: ContentProps) => {
    return (
        <CardContent>
            <CardDescription>
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 mb-2 border-b-2">
                        <span className="text-sm font-bold">Line</span>
                        <span className="text-sm font-bold">Time</span>
                        <span className="text-sm font-bold">Destination</span>
                    </div>
                    {props?.info?.map((departure, index) => {
                        return (
                            <div className="grid grid-cols-3" key={index}>
                                <span className="text-sm text-start">{departure.LineNumber}</span>
                                <span className="text-sm text-start">{departure.DisplayTime}</span>
                                <span className="text-sm text-start">{departure.Destination}</span>
                            </div>
                        )
                    })}
                </div>
            </CardDescription>
        </CardContent>
    )
};