import { TransportDataObject } from "../../api/publicTransport/types";
import { FadeLoader } from "react-spinners";


interface PublicTransportationCardProps {
    children?: React.ReactNode;
}

export const PublicTransportationCard = ({ children }: PublicTransportationCardProps) => {
    return (
        <>
            {children}
        </>
    )
};

interface HeaderProps { text: string, isLoading: boolean }
PublicTransportationCard.Header = (props: HeaderProps) => {
    const Spinner = (
        <div data-testid="public-transportation-card-spinner" className="flex flex-row">
            <h2 className="my-auto mx-2">{props.text}</h2>
            <FadeLoader width={2} color="#36d7b7" />
        </div>
    )
    const header = (
        <h2 data-testid="public-transportation-card-header">
            {props.text}
        </h2>
    )

    return (props.isLoading ? Spinner : header)
};