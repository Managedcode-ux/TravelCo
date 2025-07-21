// This file is used to fetch all the single type data from strapi such as about us, faq, saftey etc.

import { client } from "./strapiClient";
import { faqArraySchema,safteyTextStructure,disclaimerStructure, cancellationAndRefundschema, contactValidation } from "../validation/singleTypeValidator";

export const fetchFAQ_API = async () => {
    try {
        const document = client.single('frequently-asked')
        const questionsData = await document.find({
            populate: '*'
        })
        const validatedQuestionsData = faqArraySchema.parse(questionsData)
        return validatedQuestionsData
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for tours overview: ", error.errors);
        } else {
            console.error("Error fetching tours overview:", error);
        }
        throw error;
    }
}

export const fetchAboutUs_API = async () => {
    try {
        const document = client.single('about-us')
        const aboutUsData = await document.find({
            populate: '*'
        })
        console.log("ABOUT US =>", aboutUsData)
        return aboutUsData
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for about us content: ", error.errors);
        } else {
            console.error("Error fetching about us content:", error);
        }
        throw error;
    }
}

export const fetchCancellationAndRefund_API = async () => {
    try {
        const document = client.single('cancellation-and-refund')
        const cancellationAndRefundData = await document.find({
            populate: '*'
        })
        const validatedData = cancellationAndRefundschema.parse(cancellationAndRefundData)
        console.log("Cancellation & Refund =>", validatedData)
        return validatedData
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for cancellation and refund: ", error.errors);
        } else {
            console.error("Error fetching cancellation and refund:", error);
        }
        throw error;
    }
} 


export const fetchDisclaimer_API = async () => {
    try {
        const document = client.single('disclaimer')
        const disclaimerData = await document.find({
            populate: '*'
        })
        const validatedData = disclaimerStructure.parse(disclaimerData)
        return validatedData
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for disclaimer content: ", error.errors);
        } else {
            console.error("Error fetching disclaimer:", error);
        }
        throw error;
    }
} 


export const saftey_API = async () => {
    try {
        const document = client.single('saftey')
        const safteyData = await document.find({
            populate: '*'
        })
        const validatedSafteyData =  safteyTextStructure.parse(safteyData)
        return validatedSafteyData
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for saftey data: ", error.errors);
        } else {
            console.error("Error fetching saftey overview:", error);
        }
        throw error;
    }
} 

export const getContactDetails_API = async() =>{
    try {
        const document = client.single('contact')
        const contactData = await document.find({
            populate:'*'
        })
        const validatedContactData = contactValidation.parse(contactData)
        return validatedContactData
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for contact us data: ", error.errors);
        } else {
            console.error("Error fetching contact details:", error);
        }
        throw error;
    }
}