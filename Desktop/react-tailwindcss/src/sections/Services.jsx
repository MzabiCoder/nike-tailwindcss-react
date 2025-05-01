import React from 'react'
import { services } from "../constants/constants"
import ServiceCard from '../components/ServiceCard'

const Services = () => {
    return (
        <section className='max-container flex justify-center flex-wrap'>
            {services.map(service => (
                <ServiceCard {...service} alt={service.label} />
            ))}
        </section>
    )
}

export default Services