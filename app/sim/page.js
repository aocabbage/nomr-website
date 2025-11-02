import { Carousel } from '../components/Carousel';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import Article from '../components/Article';

import em_1 from '../src/Images/em_1.png'
import em_2 from '../src/Images/em_2.png'
import cl_1 from '../src/Images/cl_1.png'
import InternalLink, { HeaderLink } from '../components/WebLink';

export default function Home() {
    const em_carousel = [
        {
            id : 0,
            href: em_1,
            type: "photo",
            alt: "An image of the exotic matter lab."
        },
        {
            id : 1,
            href: em_2,
            type: "photo",
            alt: "An image of the exotic matter lab."
        }
    ]
    const cl_carousel = [
        {
            id : 0,
            href : cl_1,
            type : "photo",
            alt: "A photo of the conductors lab."
        }
    ]
    const pd_carousel = [
        {
            id : 0,
            href : "https://drive.google.com/file/d/1Z13V4iaKNuBds5b47oaexRGinLLMdYGY/preview?authuser=0",
            type : "video",
            alt: "A video of the particle decay lab."
        }
    ]
    return(
        <>
            <PageHeader title="Simulations" subtitle="Currently developed environments for the NOMR platform"/>
            <Article>
                <SectionHeader>Exotic Matter</SectionHeader>
                <p data-aos="fade-up">
                    Students generate fictitious particles. Their goal: to develop a mathematical model to describe the particles' interactions. Using basic tools to gather data. The only correct answers are the ones the students can make the best case for, based on the data they collect.
                </p>
                <Carousel items={em_carousel}/>
                <div className='text-center'>
                    <SectionHeader>Conductors</SectionHeader>
                </div>
                <Carousel items={cl_carousel}/>
                <div className='text-center'>
                    <InternalLink href="/sim/conductors.html">Conductor simulation</InternalLink>
                </div>
                
                <SectionHeader>Decay Particle</SectionHeader>
                <p data-aos="fade-up">
                    New NOMR VR scenario (experiment).  The new particle “Omegon'' spontaneously decays into three daughter particles (one of which is small and neutral, hence invisible/undetectable).  Students investigate whether charge, momentum, and mass-energy are conserved in this decay.
                </p>
                <Carousel items={pd_carousel}/>
            </Article>
        </>
    )
}