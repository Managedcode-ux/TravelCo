import classes from "./faq.module.css"
import { Accordion, Container, Title } from '@mantine/core';


const questionsData = {
    "data": {
        "questions": [
            {
                "id": 37,
                "answer": "Cherry blossom season typically runs from late March to early May, varying by location and year. Tokyo usually blooms in late March/early April, while Kyoto follows 1-2 weeks later. However, nature is unpredictable - some years see early blooms in February or late blooms in May. We monitor bloom forecasts closely and adjust our itinerary accordingly. Even without peak blooms, spring in Japan offers beautiful plum blossoms, mild weather, and fewer crowds. Our trips are timed for optimal viewing, but we guarantee an incredible Japanese experience regardless of exact bloom timing.",
                "question": "When is the best time for cherry blossoms, and what if they bloom early or late?"
            },
            {
                "id": 38,
                "answer": "No Japanese language skills are required! Our bilingual female guides handle all communication, from restaurant orders to temple explanations. We provide basic phrase cards and cultural etiquette guidance to enhance your experience. Japanese people are incredibly helpful and patient with foreign visitors, especially in tourist areas. Many signs in major cities include English, and our guides teach you essential phrases for independence. The language barrier often leads to delightful encounters and creative communication that become trip highlights.",
                "question": "Do I need to speak Japanese to enjoy this trip?"
            },
            {
                "id": 39,
                "answer": "We provide comprehensive cultural orientation to ensure respectful interactions. Key points include removing shoes when entering homes/temples, bowing as a greeting, not eating while walking, and being quiet on public transport. Our guides explain proper behavior for tea ceremonies, temple visits, and onsen experiences. Japanese culture values politeness, punctuality, and respect for others. We'll teach you dining etiquette, gift-giving customs, and appropriate behavior in different settings. Don't worry about making mistakes - Japanese people appreciate visitors who make an effort to understand their culture.",
                "question": "What should I know about Japanese customs and etiquette?"
            },
            {
                "id": 40,
                "answer": "Our accommodations balance authentic Japanese experience with Western comfort. In Tokyo, you'll stay in a modern hotel with Western-style rooms, private bathrooms, and familiar amenities. The Kyoto ryokan offers traditional tatami mat rooms with futon beds, which many guests find surprisingly comfortable. Ryokans include communal onsen (hot spring baths) with specific etiquette we'll explain. Private bath options are available for those uncomfortable with communal bathing. All accommodations include WiFi, air conditioning, and English-speaking staff. The ryokan experience - including kaiseki dining and traditional service - is often highlighted as a trip favorite.",
                "question": "Are the accommodations comfortable for Western travelers, and what's a ryokan experience like?"
            }
        ]
    },
    "meta": {}
}

function FAQ() {
    return (
        <div className={classes.wrapper}>
            <Title ta="center" className={classes.title}>
                Frequently Asked Questions
            </Title>
            <Accordion variant="separated">
                {
                    questionsData.data.questions.map(item => {
                        return (
                            <Accordion.Item className={classes.item} key={item.id} value={String(item.id)}>
                                <Accordion.Control>{item.question}</Accordion.Control>
                                <Accordion.Panel>{item.answer}</Accordion.Panel>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default FAQ