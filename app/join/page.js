import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import PageHeader from "../components/PageHeader";
import Article from "../components/Article";
import InternalLink, { ExternalLink } from "../components/WebLink";

export default function Home() {

    const positions = [
        {
            id: 0,
            name : "Developer",
            open : true,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat velit, fringilla porttitor rutrum sed, pellentesque sit amet lorem. Suspendisse gravida massa sed augue facilisis, hendrerit lacinia tortor pulvinar. Morbi consectetur porttitor eleifend. Nullam risus est, blandit nec auctor at, sagittis vel urna. Cras euismod dapibus auctor. Vivamus dolor tellus, accumsan ut sapien et, imperdiet dapibus ante. Etiam non erat vitae lacus interdum tincidunt sit amet vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            app_link : "https://www.google.com"
        },
        {
            id: 1,
            name : "Artist",
            open : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat velit, fringilla porttitor rutrum sed, pellentesque sit amet lorem. Suspendisse gravida massa sed augue facilisis, hendrerit lacinia tortor pulvinar. Morbi consectetur porttitor eleifend. Nullam risus est, blandit nec auctor at, sagittis vel urna. Cras euismod dapibus auctor. Vivamus dolor tellus, accumsan ut sapien et, imperdiet dapibus ante. Etiam non erat vitae lacus interdum tincidunt sit amet vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            app_link : "https://www.google.com"
        },
        {
            id: 2,
            name : "Creative Lead",
            open : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat velit, fringilla porttitor rutrum sed, pellentesque sit amet lorem. Suspendisse gravida massa sed augue facilisis, hendrerit lacinia tortor pulvinar. Morbi consectetur porttitor eleifend. Nullam risus est, blandit nec auctor at, sagittis vel urna. Cras euismod dapibus auctor. Vivamus dolor tellus, accumsan ut sapien et, imperdiet dapibus ante. Etiam non erat vitae lacus interdum tincidunt sit amet vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            app_link : "https://www.google.com"
        },
        {
            id: 3,
            name : "Design Lead",
            open : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat velit, fringilla porttitor rutrum sed, pellentesque sit amet lorem. Suspendisse gravida massa sed augue facilisis, hendrerit lacinia tortor pulvinar. Morbi consectetur porttitor eleifend. Nullam risus est, blandit nec auctor at, sagittis vel urna. Cras euismod dapibus auctor. Vivamus dolor tellus, accumsan ut sapien et, imperdiet dapibus ante. Etiam non erat vitae lacus interdum tincidunt sit amet vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            app_link : "https://www.google.com"
        },
        {
            id: 4,
            name : "Graphics Engineer",
            open : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat velit, fringilla porttitor rutrum sed, pellentesque sit amet lorem. Suspendisse gravida massa sed augue facilisis, hendrerit lacinia tortor pulvinar. Morbi consectetur porttitor eleifend. Nullam risus est, blandit nec auctor at, sagittis vel urna. Cras euismod dapibus auctor. Vivamus dolor tellus, accumsan ut sapien et, imperdiet dapibus ante. Etiam non erat vitae lacus interdum tincidunt sit amet vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            app_link : "https://www.google.com"
        },
        {
            id: 5,
            name : "Development and Operations",
            open : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat velit, fringilla porttitor rutrum sed, pellentesque sit amet lorem. Suspendisse gravida massa sed augue facilisis, hendrerit lacinia tortor pulvinar. Morbi consectetur porttitor eleifend. Nullam risus est, blandit nec auctor at, sagittis vel urna. Cras euismod dapibus auctor. Vivamus dolor tellus, accumsan ut sapien et, imperdiet dapibus ante. Etiam non erat vitae lacus interdum tincidunt sit amet vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            app_link : "https://www.google.com"
        },
        {
            id: 6,
            name : "Senior Developer",
            open : false,
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat velit, fringilla porttitor rutrum sed, pellentesque sit amet lorem. Suspendisse gravida massa sed augue facilisis, hendrerit lacinia tortor pulvinar. Morbi consectetur porttitor eleifend. Nullam risus est, blandit nec auctor at, sagittis vel urna. Cras euismod dapibus auctor. Vivamus dolor tellus, accumsan ut sapien et, imperdiet dapibus ante. Etiam non erat vitae lacus interdum tincidunt sit amet vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            app_link : "https://www.google.com"
        }
    ]

    return(
        <>
            <PageHeader title="Joining NOMR" subtitle="Apply to be a developer, designer, or other position"/>
            <Article>
                <SectionHeader>Policy</SectionHeader>
                <p className="text-center">We offer to following compensation methods</p>
                <div className="overflow-hidden flex flex-col lg:flex-row border border-secondary-600 rounded-lg">
                    <div className="p-4 flex lg:w-1/2 flex-col border border-secondary-600 my-auto">
                        <b>Research Credit</b>
                        <div className="space-y-2">
                            <p>The NOMR VR lab project has created a number of research opportunities for undergraduate students taking PHYS 499 (Independent Study) so far, including:</p>
                            <ul className="list-disc pl-8">
                                <li>Development of real-time simulations of charge distributions on conductors of arbitrary shape subject to external electric fields.</li>
                                <li>Design and implementation of a data structure for managing event causality and timing in context of a special relativity simulation</li>
                                <li>Enforcement of inter-client consistency in a probabilistic physics simulation run by multiple networked clients;</li>
                                <li>Prototyping a VR optics lab for potential use in PHYS 119 and 123 labs.</li>
                            </ul>
                            <p>We are expanding the undergraduate student developer team to create more opportunities to explore the nascent field of VR education research, opening opportunities for new avenues of exploration to students at a critical time in the field’s development.</p>
                            <ExternalLink href="https://docs.google.com/document/d/1910T6vYzycgZxj_df58b2qku8RSfmRbAaHhI3XGZ15w/edit?tab=t.0">Example syllabus here</ExternalLink>
                        </div>
                    </div>
                    <div className="p-2 flex lg:w-1/2 flex-col border border-secondary-600">
                        <b>Employment</b>
                        <div className="space-y-2">
                            <p>Offering paid hourly positions as Student Developers.</p>
                            <ul className="list-disc pl-8">
                                <li>Flexible hours</li>
                                <li>In-person or remote work</li>
                                <li>Standard UW student wages</li>
                                <li>6 hrs/wk (0.15 FTE) with the opportunity for more</li>
                                <li>Access to VR headset and gaming laptop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>Student software developers, as members of the NOMR VR Student Developer Group, have to date yielded excellent career development opportunities.  We are currently expanding this team to a larger and broader student population to increase opportunities for these student developers, with significant relevance to employment and research prospects in the blossoming field of VR programming. </p>
                <SectionHeader>Positions</SectionHeader>
                <div className="border-secondary-600 border border-secondary-600 rounded-lg overflow-hidden">
                    <div className="border border-secondary-600 font-bold flex flex-col lg:flex-row space-x-0 lg:space-x-4 p-2">
                        <div className="flex flex-row space-x-4">
                            <p className="w-36">Position</p>
                            <p className="w-24">Status</p>
                        </div>
                        <p>Description</p>
                    </div>
                    <div className={`flex !mt-0 flex-col grid-rows-${positions.length}`}>
                        {   positions.map(pos => (
                            <div className={`${pos.open ? `` : `bg-secondary-300 text-secondary-500`} border border-secondary-600 flex flex-col lg:flex-row p-2 space-y-4 lg:space-y-0 lg:space-x-4`} key={pos.id}>
                                <div className="flex flex-row space-x-4">
                                    <p className="min-w-36 ">{pos.name}</p>
                                    <p className="min-w-24 italic">{pos.open ? "Open" : "Not Open"}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="!mt-0">{pos.description}</p>
                                    {pos.open && <InternalLink href={pos.app_link} className="!mt-0">Apply here</InternalLink>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Article>
        </>
    )
}