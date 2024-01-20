import { usePublicTransportApi } from '../../api/publicTransport/usePublicTransportApi'
import { PublicTransportationCard } from '../PublicTransportationCard'


export const PublicTransportWidget = () => {
    //const { trainData, metroData } = usePublicTransportApi()
    return (
        <div className=' grid grid-cols-2 gap-4'>
            <PublicTransportationCard >
                <PublicTransportationCard.Header text={'Odenplan'} isLoading={true} />
            </PublicTransportationCard>
        </div>
    )





}




