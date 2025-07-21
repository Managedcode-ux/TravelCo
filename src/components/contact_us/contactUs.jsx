import { useState } from 'react'
import classes from './contact.module.css'
import { useEffect } from 'react'
import { getContactDetails_API } from '../../api/singleTypeAPI'


function ContactUsCard({toggle}) {
    // const [showState, setShowstate] = useState(true)
    const [contactDetails, setContactDetails] = useState()


    useEffect(() => {
        const fetchContact = async () => {
            try {
                const contactData = await getContactDetails_API()
                setContactDetails(contactData)
                console.log("Contact data => ", contactData)
            } catch (error) {
                console.log("Rendering the trip details failed due to: ", error)
            }
        }
        fetchContact()

    }, [])


    return (
        <div className={classes.contactCard}
            style={toggle ? { display: 'flex' } : { display: 'none' }}
        >
            {
                toggle &&
                contactDetails.data.contact_option.map(contactOption => {
                    return (
                        <div className={classes.contactItem} key={contactOption.id}>
                            <span>{contactOption.type}: </span>
                            <span>{contactOption.value}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactUsCard