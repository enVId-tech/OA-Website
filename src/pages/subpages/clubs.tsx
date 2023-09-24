import React from "react";
import '../../components/scss/pages/subpages/clubs.scss';
import Footer from "../../components/ts/footer/Footer";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import ClubsList from "../../components/ts/clubs";

interface ClubsProps {
    club: string;
}

const Clubs = () => {
    const Academics: ClubsProps[] = ClubsList("Academic");
    const Interest: ClubsProps[] = ClubsList("Interest");
    const Culture: ClubsProps[] = ClubsList("Culture");
    const Leadership: ClubsProps[] = ClubsList("Leadership");
    const Performing: ClubsProps[] = ClubsList("Performing");
    const Spiritual: ClubsProps[] = ClubsList("Spiritual");
    const Speaking: ClubsProps[] = ClubsList("Speaking");

        return (
            <div id="Clubs">
                <Navbar />
                <PageTitle height={80} mainText="Clubs" subText="Get involved!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />

                <div id="MainClubs">
                    <div className="Club" id="Robotics">
                        <div className="ClubTitleDiv">
                            <h1 className="ClubTitle">Oxford Academy Robotics</h1>
                            <div className="ClubDescriptionDiv">
                                <p className="ClubDescription">
                                    Our teams design, build, run, and manage competitive robots, while learning and teaching the scientific and technical concept behind it. Students aim to continue the culture of constantly improving and challenging ourselves and the team as a whole.</p>
                            </div>
                        </div>
                        <div className="ClubImageDiv">
                            {/* Placeholder Image */}
                            <img className="ClubImage" src="images/FRC.svg" alt="Robotics" id="Club1Img" />
                        </div>
                    </div>
                    <div className="Club2" id="Code">
                        <div className="ClubTitleDiv">
                            <h1 className="ClubTitle">OA CyberPatriot</h1>
                            <div className="ClubDescriptionDiv">
                                <p className="ClubDescription">
                                    CyberPatriot is the National Youth Cyber Education Program. At the center of CyberPatriot is the National Youth Cyber Defense Competition. The competition puts teams of high school and middle school students in the position of newly hired IT professionals tasked with managing the network of a small company. In the rounds of competition, teams are given a set of virtual images that represent operating systems and are tasked with finding cybersecurity vulnerabilities within the images and hardening the system while maintaining critical services in a six hour period.</p>
                            </div>
                        </div>
                        <div className="ClubImageDiv">
                            {/* Placeholder Image */}
                            <img className="ClubImage" src="images/Cyberpatriot.png" alt="Code" id="Club2Img" />
                        </div>
                    </div>
                    <div id="GeneralClubs">
                        <h1 id="Key">Club Key</h1>
                        <span className="ClubKey">
                            <div id="Academic" className="ClubKeyTitleDiv">
                                <h1 className="ClubKeyTitle">Academic</h1>
                                <div className="ClubsList">
                                    {Academics.map((club) => (
                                        <h1 className="ClubTitle">{club.club}</h1>
                                    ))}
                                </div>
                            </div>
                            <div id="SpecialInterest" className="ClubKeyTitleDiv">
                                <h1 className="ClubKeyTitle">Special Interest</h1>
                                <div className="ClubsList">
                                    {Interest.map((club) => (
                                        <h1 className="ClubTitle">{club.club}</h1>
                                    ))}
                                </div>
                            </div>
                            <div id="DiversityCulture" className="ClubKeyTitleDiv">
                                <h1 className="ClubKeyTitle">Diversity & Culture</h1>
                                <div className="ClubsList">
                                    {Culture.map((club) => (
                                        <h1 className="ClubTitle">{club.club}</h1>
                                    ))}
                                </div>
                            </div>
                            <div id="ServiceLeadership" className="ClubKeyTitleDiv">
                                <h1 className="ClubKeyTitle">Service & Leadership</h1>
                                <div className="ClubsList">
                                    {Leadership.map((club) => (
                                        <h1 className="ClubTitle">{club.club}</h1>
                                    ))}
                                </div>
                            </div>
                            <div id="ArtsPerformingArts" className="ClubKeyTitleDiv">
                                <h1 className="ClubKeyTitle">Arts & Performing Arts</h1>
                                <div className="ClubsList">
                                    {Performing.map((club) => (
                                        <h1 className="ClubTitle">{club.club}</h1>
                                    ))}
                                </div>
                            </div>
                            <div id="SpiritualReligious" className="ClubKeyTitleDiv">
                                <h1 className="ClubKeyTitle">Spiritual & Religious</h1>
                                <div className="ClubsList">
                                    {Spiritual.map((club) => (
                                        <h1 className="ClubTitle">{club.club}</h1>
                                    ))}
                                </div>
                            </div>
                            <div id="PublicSpeaking" className="ClubKeyTitleDiv">
                                <h1 className="ClubKeyTitle">Public Speaking</h1>
                                <div className="ClubsList">
                                    {Speaking.map((club) => (
                                        <h1 className="ClubTitle">{club.club}</h1>
                                    ))}
                                </div>
                            </div>
                        </span>
                    </div>
                </div>

                <Footer title="Clubs" />
            </div>
        );
    }

    export default Clubs;