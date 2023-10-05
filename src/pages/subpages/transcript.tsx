/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/subpages/transcript.scss';

const Transcript = (): React.JSX.Element => {
    return (
        <div id="Transcript">
            <Navbar />
            <PageTitle height={80} mainText="Transcript" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div id="TranscriptMain">
                <h1 id="TitleText">Transcript</h1>
                <div id="Parchment">
                    <h1 id="ParchmentMain">What is Parchment?
                        <br />
                        <br />
                        Parchment is the exclusive site where current students, alumni, and third party companies can obtain digital copies of official transcripts, immunization record, and other documents. This process is done electronically and it is sent (digitally or physically, as requested) directly to the destination the student/alumnus/company chooses. Please note that you must create an account in order to request the documents (including transcripts).
                    </h1>
                    <br />
                    <br />
                    <div id="Alumni">
                        <h1 id="AlumniTitle">Alumni Transcript Request</h1>
                        <h1 id="AlumniSubTitle">
                        Please visit the Parchment link below to request a digital copy of your official transcript.
                        </h1>
                        <a id="AlumniLink" href="https://www.parchment.com/u/registration/5583/account" target="_blank">Parchment</a>
                    </div>
                    <br />
                    <br />
                    <div id="Student">
                        <h1 id="StudentTitle">Current Student Transcript Request Only</h1>
                        <h1 id="StudentSubTitle">
                        If you are a current student and would like to obtain a paper copy, click on the link below 
                        </h1>
                        <a id="StudentLink" href="https://docs.google.com/forms/d/1FflDpc3lq6b4KcJmymckDULAaSiygiBFy4zE6ZySF8o/viewform?edit_requested=true#response=ACYDBNjyMQ9R6VbU3JVJMURPpaiI-3TlMTxNn8k5GRteSwsLWkmwW42RjIRwNvpW-MHl6C4" target="_blank">Transcript Request Form</a>
                    </div>
                </div>
            </div>
            <Footer title="Transcript" />
        </div>
    )
}

export default Transcript;