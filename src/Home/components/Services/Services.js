import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

    const services = [
        { id: 1, class: "bg-gray-200 card hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-md hover:text-white", img: "https://i.ibb.co/z4YdGSf/logo.png", title: "logo design", text: "Logo design is the process of creating a visual representation that symbolizes a brand, company, organization, or individual. A logo is a distinctive and recognizable graphic mark, emblem, or symbol that serves as a visual representation of the entity it represents. Logos are often used to convey the essence, values, and identity of a brand in a concise and memorable way." },

        { id: 2, class: "bg-gray-200 card hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-md hover:text-white", img: "https://i.ibb.co/j6nPhCg/multimedia.png", title: "multimedia", text: "Multimedia design involves the creation and integration of various forms of media, such as text, images, audio, video, animations, and interactive elements, to communicate messages and information in a dynamic and engaging manner. It is a multidisciplinary field that combines elements of graphic design, animation, audio production, video editing, and interactive design to create cohesive and impactful multimedia experiences." },
        { id: 3, motto: "-what we do" },

        { id: 4, class: "bg-gray-200 card hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-md hover:text-white", img: "https://i.ibb.co/b2F7BBY/info.png", title: "infographic", text: "An infographic is a visual representation of information, data, or knowledge presented in a concise and engaging format. It combines text, images, charts, and diagrams to convey complex concepts or data in a more easily understandable and visually appealing manner. Infographics are designed to quickly communicate information and insights, making them particularly useful for presenting statistics, trends, comparisons, processes, or explanations." },
        { id: 5, class: "bg-gray-200 card hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-md hover:text-white", img: "https://i.ibb.co/8zyGy4c/print.png", title: "print design", text: "Print design refers to the process of creating visual materials that are intended to be printed or physically produced, such as brochures, flyers, posters, business cards, magazines, packaging, and other promotional materials. It involves designing layouts, selecting typography, arranging images, and creating graphics with the goal of producing visually appealing and effective printed materials." },
        { id: 6, class: "bg-gray-200 card hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-md hover:text-white", img: "https://i.ibb.co/YQx3Bd7/web-design.png", title: "web design", text: "Web design refers to the process of creating and designing the visual layout, aesthetics, and user experience of websites. It involves combining various elements, including layout, colors, typography, graphics, images, and interactive features, to produce a visually appealing and functional website." }
    ]

    return (
        <div className="bg-[url('https://i.ibb.co/xJCsmq2/bg1.png')] bg-no-repeat bg-right-top">
            <div className='w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 xl:gap-12 my-10'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;