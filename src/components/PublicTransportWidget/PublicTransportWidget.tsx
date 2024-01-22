
import { useQueryClient } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import { usePublicTransportApi } from '../../api/publicTransport/usePublicTransportApi'
import { PublicTransportationCard } from './PublicTransportationCard'
import { linesToSollentuna } from '../../api/publicTransport/constants'

export const PublicTransportWidget = () => {
    const { trainData, metroData } = usePublicTransportApi()
    const queryClient = useQueryClient()
    const refetchMetroData = () => queryClient.invalidateQueries({ queryKey: ['metroData'] });
    const refetchTrainData = () => queryClient.invalidateQueries({ queryKey: ['trainData'] });
    return (
        <div className='grid grid-cols-2 gap-4 border-red-300'>
            <Button  onClick={refetchTrainData}>REFETCH Train</Button>
            <Button  onClick={refetchMetroData}>REFETCH METRO</Button>
            <PublicTransportationCard key='train-card'>
                <PublicTransportationCard.Header text={'Odenplan'} isLoading={trainData.isLoading} lastUpdated={new Date(trainData?.response?.ResponseData?.LatestUpdate ?? '')} />
                <PublicTransportationCard.Content info={trainData.response?.ResponseData.Trains.filter(train => train.JourneyDirection === 2 && linesToSollentuna.includes(train.LineNumber))} />
            </PublicTransportationCard>
            <PublicTransportationCard key='metro-card'>
                <PublicTransportationCard.Header text={'Abrahamsberg'} isLoading={metroData.isLoading} lastUpdated={new Date(metroData?.response?.ResponseData?.LatestUpdate ?? '')} />
                <PublicTransportationCard.Content info={metroData.response?.ResponseData.Metros.filter(metro => metro.JourneyDirection === 2)} />
            </PublicTransportationCard>
        </div>
    )





}




