import React from 'react';
import laxmisir from '../assets/team/laxmisir.jpg';
import ruchimaam from '../assets/team/ruchimaam.jpg';
import TeamPage from '../pages/team-page';

const Team = () => {
    return (
        <div className="min-h-screen w-full bg-white-600 flex flex-col justify-center items-center p-4 md:p-8 mt-48">
            {/* Responsive Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-8 text-center">
                Our Team
            </h1>

            {/* Team Members */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-start gap-8">
                {/* Member 1 */}
                <TeamPage
                    imageSrc={laxmisir}
                    imageAlt="Laxmi Sir"
                    textSide="right"
                    heading="Laxminarayana Pillai (Director)"
                    paragraph="More than 15 years of Industrial experience of handling all kinds of projects in the field of Construction, Architectural, Landscape Designing and Trunkey projects."
                />

                {/* Member 2 */}
                <TeamPage
                    imageSrc={ruchimaam}
                    imageAlt="Ruchi Ma'am"
                    textSide="left"
                    heading="Ruchita H. Patil  (Managing Partner of Abstract Design)"
                    paragraph="7 years of experience, in the field of Construction and Interior design. Have worked in various sites for TATA groups."
                />
            </div>
        </div>
    );
};

export default Team;
