import classes from "./faq.module.css"
import { Accordion, Container, Title } from '@mantine/core';


function FAQ({data}) {
    const questionsArray = data?.data?.questions
    return (
        <div className={classes.wrapper}>
            <Title ta="center" className={classes.title}>
                Frequently Asked Questions
            </Title>
            <Accordion variant="separated">
                {
                    questionsArray?.map(item => {
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