import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchTourDetails } from "../../api/tourAPI"
import classes from "./tourDetails.module.css"
import { useRef } from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Itenary from '../../components/tripItenary/Itenary'
import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import { useMemo } from 'react'
import { customEmblaCarouselOptions } from './tourDetailsUtils'
import FAQ from '../../components/Questions/faq'
import { fetchFAQ } from "../../api/faqAPI";


function TourDetails() {
    const { id } = useParams();
    const [tourInformation, setTourInformation] = useState();
    const [faqs, setFaqs] = useState()
    const [reserverSlotTooltip, setreserverSlotTooltip] = useState(false)
    const autoplay = useRef(Autoplay({ delay: 4000 }))

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const detailsData = await fetchTourDetails(id);
                setTourInformation(detailsData);
            }
            catch (error) {
                console.log("Rendering the trip details failed due to: ", error)
            }
        };

        const fetchFAQs = async () => {
            try {
                const faqs = await fetchFAQ();
                setFaqs(faqs)
            } catch (error) {
                console.log("Rendering the FAQ's failed due to: ", error)
            }
        }
        
        fetchDetails();
        fetchFAQs()
    }, [])

    const flattenedTourInformation = useMemo(() => {
        if (!tourInformation) return null

        return {
            images: tourInformation.data.location_images?.all_images ?? [],
            name: tourInformation.data.location_information?.name ?? '',
            overview: tourInformation.data.location_information?.overview ?? [],
            trip_itenary: tourInformation.data.trip_itenary ?? [],
            highlights: tourInformation.data.location_information?.highlights ?? [],
            inclusion: tourInformation.data.inclusion_exclusion?.inclusions ?? [],
            exclusions: tourInformation.data.inclusion_exclusion?.exclusions ?? [],
            additionalInformation: tourInformation.data.location_information?.additional_info ?? [],
            trip_pricing: tourInformation.data.trip_pricing
        }
    }, [tourInformation])

    const reserveSlotTooltipClick = () => {
        setreserverSlotTooltip(prevState => !prevState)
    }



    return (
        <div className={classes.detailsPageContainer}>
            {/* image carousel*/}
            <div className={classes.headerImageCarouselandNameContainer}>
                <Carousel
                    height={256}
                    withControls={false}
                    withIndicators={true}
                    slideSize="100%"
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={() => autoplay.current.play()}
                    emblaOptions={customEmblaCarouselOptions}
                >
                    {flattenedTourInformation && flattenedTourInformation.images.map((imageObj) => (
                        <Carousel.Slide key={imageObj.id}>
                            <Image src={import.meta.env.VITE_serverURL + imageObj.url} height={256} fit="cover" />
                        </Carousel.Slide>
                    ))}
                </Carousel>
                <h4 className={classes.locationName}>{flattenedTourInformation && flattenedTourInformation.name}</h4>
            </div>

            {/* Price and Booking section */}
            <div className={classes.priceContainer}>
                <h2 className={classes.priceSectionHeading}>
                    Pricing
                </h2>
                <div className={classes.priceBox}>
                    <h3 >Price</h3>
                    <div className={classes.amountTextContainer}>
                        <h6>
                            {flattenedTourInformation && flattenedTourInformation.trip_pricing.regular_price}
                            <span className={classes.moneySign}>$</span>
                        </h6>
                    </div>
                </div>
                <div className={classes.priceBox}>
                    <h3>Reserve Slot</h3>
                    <div className={classes.tooltipText} style={
                        reserverSlotTooltip ? { display: 'block' } : { display: 'none' }
                    }>
                        <p>Book your seat by paying partial amount</p>
                    </div>
                    <img
                        src='../../../public/question.svg' className={classes.reserveSlotTooltip}
                        onClick={reserveSlotTooltipClick}
                    />
                    <div className={classes.amountTextContainer}>
                        <h6>
                            {flattenedTourInformation && flattenedTourInformation.trip_pricing.slot_reservation_price}
                            <span className={classes.moneySign}>$</span>
                        </h6>
                    </div>
                </div>
            </div>

            {/* Tour details section */}
            <div className={classes.tripInfoContainer}>

                {/* overview */}
                <div className={classes.overviewContainer}>
                    <h2 className={classes.sectionHeading}>Overview</h2>
                    <div>
                        {
                            flattenedTourInformation &&
                            <BlocksRenderer content={flattenedTourInformation.overview}
                                className={classes.tourOverviewText}
                            />
                        }
                    </div>
                </div>

                {/* Itenary */}
                <div className={classes.dailyItenaryContainer}>
                    <h2 className={classes.sectionHeading}>Itenary</h2>
                    {flattenedTourInformation && <Itenary data={flattenedTourInformation.trip_itenary} />}
                </div>

                {/* Highlights */}
                <div className={classes.highlightsContainer}>
                    <h2 className={classes.sectionHeading}>Highlights</h2>
                    {
                        flattenedTourInformation && <BlocksRenderer content={flattenedTourInformation.highlights} />
                    }
                </div>

                {/* Inclusions */}
                <div className={classes.inclusionContainer}>
                    <h2 className={classes.sectionHeading}>Inclusions</h2>
                    {
                        flattenedTourInformation && <BlocksRenderer content={flattenedTourInformation.inclusion} />
                    }
                </div>

                {/* Exclusions */}
                <div className={classes.exclusionContainer}>
                    <h2 className={classes.sectionHeading}>Exclusions</h2>
                    {
                        flattenedTourInformation && <BlocksRenderer content={flattenedTourInformation.exclusions} />
                    }
                </div>

                <div className={classes.additionalInformation}>
                    <h2 className={classes.sectionHeading}>Additional Information</h2>
                    {
                        flattenedTourInformation && <BlocksRenderer content={flattenedTourInformation.additionalInformation} />
                    }
                </div>

            </div>

            <div className={classes.faqContainer}>
                <FAQ data={faqs} />
            </div>
        </div>
    )
}

export default TourDetails