import { client } from "./strapiClient";
import { faqArraySchema } from "../validation/questionsValidator";

export const fetchFAQ = async() => {
    const document = client.single('frequently-asked')
    const questionsData = await document.find({
        populate: '*'
    })
    const validatedQuestionsData = faqArraySchema.parse(questionsData)
    console.log("VALIDATED QUESTIONS DATA =>", validatedQuestionsData)
    return validatedQuestionsData
}
