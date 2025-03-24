import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion'
import React from 'react'
import { Plus } from 'lucide-react';

export default function FQA() {
    const QA = [

        {
            "Q": "What tools are included in Kiwi AI?",
            "A": "Kiwi AI includes a suite of tools designed to enhance productivity and creativity. These may include features like AI-powered writing assistance, image generation, data analysis, and personalized recommendations. Please refer to our product page for a full list of available tools."
        },
        {
            "Q": "Is Kiwi AI easy to use for beginners?",
            "A": "Yes, Kiwi AI is designed with user-friendliness in mind. We offer an intuitive interface and helpful tutorials to guide beginners through the platform. Our goal is to make AI accessible to everyone, regardless of their technical experience."
        },
        {
            "Q": "Can I try Kiwi AI before subscribing?",
            "A": "Yes, we offer a free trial period so you can explore Kiwi AI's features before committing to a subscription. Please visit our website to sign up for a trial and experience the benefits firsthand."
        },
        {
            "Q": "How do I cancel my subscription?",
            "A": "You can easily cancel your Kiwi AI subscription through your account settings. Navigate to the 'Subscription' section in your account dashboard and follow the cancellation instructions. Your subscription will remain active until the end of the current billing cycle."
        },
        {
            "Q": "When will Kiwi AI update?",
            "A": "We are constantly working to improve Kiwi AI and release updates regularly. These updates include new features, performance enhancements, and bug fixes. We recommend checking our blog or social media channels for the latest news on updates and releases."
        }
    ]

    return (
        <div className='w-full max-w-[1190px] flex flex-col mt-32 gap-12'>
            <h2 className='h-[68px] text-[42px] text-center tracking-[9px] font-medium text-ai-primary'>
                FAQs
            </h2>
            <div className=''>
                <Accordion type="single" collapsible className="w-full" >
                    {
                        QA.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} >
                                <AccordionTrigger className='text-[18px] text-[#282828] font-medium leading-[26px] decoration-none trigger-icon'>
                                    {item.Q}
                                    <Plus size={24} color='#667085' />
                                </AccordionTrigger>
                                <AccordionContent className='text-[18px] text-[#282828] font-medium leading-[26px]'>{item.A}</AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}
