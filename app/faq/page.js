"use client"

import AccordionTextBox from "../components/Accordion";
import Article from "../components/Article";
import PageHeader from "../components/PageHeader";
import InternalLink from "../components/WebLink";

export default function Home() {

    const questions = [
        {
            id : 0,
            question : "What is NOMR anyway?",
            answer : "Novel Observations in Mixed Reality (NOMR) is a virtual reality app currently used in the PHYS 118/122/142 and PHYS 231 lab courses.  The app was developed by Jared Canright, a graduate student in the Physics Education Group (PEG), here at the UW."
        },
        {
            id : 1,
            question : "So, what is the NOMR Student Development Group?",
            answer : "The NOMR Student Development Group (NOMR SDG) is a team of undergraduate developers helping to support the growth of the NOMR VR app.  Student developers either receive hourly pay for their work, or receive undergrad research credit through PHYS 499 with the PEG."
        },
        {
            id : 2,
            question : "Do I have to be a hyper-experienced coding nerd to join?",
            answer : "No, not necessarily!  In addition to the primary goal of supporting the NOMR app development, the NOMR SDG’s mission includes providing hands-on learning opportunities for students with a wide range of coding experience.  In other words, the NOMR SDG is setup to accommodate a balance of experienced and inexperienced coders, who will learn on-the-job through a carefully curated set of tutorials.  So long as you have the desire and commitment to learn you could join as a total newbie."
        },
        {
            id : 3,
            question : "Do I need to be a Physics major to join?",
            answer : "No!  We strongly believe there is strength in diversity, and aim to have a broad range of perspectives and skill-sets on our team.  We might pair up team members so that their skill-sets compliment each other."
        },
        {
            id : 4,
            question : "Who can apply?",
            answer : "Undergraduates of the University of Washington with current student status."
        },
        {
            id : 5,
            question : "What are you looking for in a candidate?",
            answer : "As a group, we need to have the attributes of physics knowledge, coding expertise and drive.  However, we don’t expect all team members to be both physics and coding experts.  Of course, physics knowledge and coding experience are significant positives, but what all candidates must have is the drive to succeed as part of our team.  As such, in the application, we ask you for evidence of successful independent project work.  We also are mindful of an important part of our mission, which is to provide equitable access to applied coding opportunities."
        },
        {
            id : 6,
            question : "Do I need to have taken the 1xx Physics VR lab courses?",
            answer : "No!  Of course it is great if you have, as you will already know what NOMR is all about.  But if you haven’t, then no problem, you can experience the lab modules for yourself as part of your onboarding."
        },
        {
            id : 7,
            question : "Can I get paid?",
            answer : "Absolutely!  NOMR SDG has hourly paid positions (typically 6 hours per week).  Alternatively, students can gain undergrad research credit through the PHYS 499 course.   The work is flexible, so you can do it when it best suits your schedule.  The current pay rate is $22.65/hr."
        },
        {
            id : 8,
            question : "What if I don’t have a powerful laptop, or a VR headset?",
            answer : "We provide those for you!  The NOMR app runs through Unity, and you’ll use an Oculus II headset to test your code.  We provide student developers with laptops and Oculus headsets to enable them to perform the work."
        },
        {
            id : 9,
            question: "What coding language/program does NOMR use?",
            answer : "We primarily use Unity to develop for the Android platform. This means we use C# (similar to Java). Not familiar? Don’t worry, there is room to learn on the job! However, we also use tons of other languages/programs too (e.g.  Blender, Godot, Adobe Photoshop, etc.)!"
        },
        {
            id : 10,
            question: "What am I going to be doing?",
            answer : "",
            link : "Check out the available job descriptions here",
            href : "/join"
        },
        {
            id : 11,
            question: "What does it mean to be on the NOMR team?",
            answer : "In addition to being a part of the greater NOMR SDG, we like to create sub-teams by pairing up developers that round out each others skill sets. You have the chance to collaborate and support each other directly while still having the structure of the SDG to rely on."
        },
        {
            id : 12,
            question: "Is there room for non-coding roles/jobs?",
            answer : "Yes! Essentially, NOMR is a game application, and just like any good game, the player experience is key. This means improving existing things like accessibility, legibility, and interactivity, just to name a few. Here’s where UX design comes in. But NOMR is so much more! We are creating a physics sandbox, a place for the curious to play. We want to create novel simulations, things that bring out the physics researcher in us all. Come imagine with us!"
        },
        {
            id : 13,
            question: "Can I work remotely?",
            answer : "From time to time there will be a need to meet in person.  But for the most part the work and meetings can be, and typically are, performed remotely.  The development work can fit around your own schedule."
        },
        {
            id : 14,
            question: 'What kind of file do I upload to “Previous projects/work” section of the Google form?',
            answer : '“Previous projects/work” is a place to highlight any projects, personal or work-related, that you’ve completed in the past. NOMR development involves taking significant independent ownership of a months-long project, so we’re looking for evidence that you’ve engaged in extended projects before, outside of class work. Successful applicants in the past have used that space to highlight Minecraft mods, web apps, or hobby games they’ve made, show open-source contributions on GitHub, or demonstrate an art portfolio. You could also upload a resume or CV there if you feel that would best showcase your background.'
        },
        {
            id : 15,
            question: "What is the hiring timeline?",
            answer : "We appreciate your patience as we process the large number of applications. We are hiring in batches, so the whole process will be on going until the positions are filled. All submissions sent before the deadline will be considered as we go through several rounds of our selection process. We aim to update our information in a timely manner and keep all our applicants updated on the status of their applications."
        },
        {
            id : 16,
            question: "How do I join?",
            answer : "",
            link : "Apply Here. Good Luck!",
            href : "/join"
        },
    ]

    return(
        <>
            <PageHeader title="FAQ" subtitle="Frequently Asked Questions"/>
            <Article>
                {questions.map((question) => (
                    <AccordionTextBox key={question.id} title={question.question}>
                        <p>{question.answer}</p>
                        {question.link && <InternalLink href={question.href}>{question.link}</InternalLink>}
                    </AccordionTextBox>
                ))}
            </Article>
        </>
    )
}