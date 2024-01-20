import { usePublicTransportApi } from '../../api/publicTransport/usePublicTransportApi'
import { PublicTransportationCard } from '../PublicTransportationCard'


export const PublicTransportWidget = () => {
    const { trainData, metroData } = usePublicTransportApi()
    return (
        <div className=' grid grid-cols-2 gap-4'>
            <PublicTransportationCard >
                <PublicTransportationCard.Header text={'Odenplan'} isLoading={trainData.isLoading} lastUpdated={new Date(trainData?.response?.ResponseData?.LatestUpdate ?? '')} />
                <PublicTransportationCard.Content info={trainData.response?.ResponseData.Trains} />
            </PublicTransportationCard>
            <PublicTransportationCard >
                <PublicTransportationCard.Header text={'Abrahamsberg'} isLoading={metroData.isLoading} />
                <PublicTransportationCard.Content info={metroData.response?.ResponseData.Metros} />
            </PublicTransportationCard>
        </div>
    )





}




