/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../assets/css/profile.css";
import PersonalDetails from "../components/PersonalDetails";
import axiosInstance from "../axios";
import EventCard2 from "../components/EventCard2";
import InquizitiveIcon from "../pages/Events/icons/inquizitive.png";
import NCCIcon from "../pages/Events/icons/NCC.png";
import RCIcon from "../pages/Events/icons/RC.png";
import ScramblingText from "../components/ScramblingText";
const Profile = () => {
  const NCCEvent = "National Coding Contest";
  const RCEvent = "Reverse Coding";
  const InquizitiveEvent = "InQUIZitive";

  const [appState, setAppState] = useState({
    loading: true,
    profile: null,
  });

  useEffect(() => {
    axiosInstance.get("account_detail/").then((res) => {
      const profileData = res.data;
      console.log(res.data);
      setAppState({ loading: false, profile: profileData });
      console.log(res.data);
    });
  }, [setAppState]);

  if (appState.loading) return <p>Loading Profile Data</p>;
  return (
    <div className="pr-container body-ContactUs">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ paddingTop: "3vw" }}
        >
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="mt-4 h1 heading-res heading-wrapper"
              style={{ fontWeight: "300", lineHeight: "1.2" }}
            >
              <ScramblingText
                scrambleText={"Profile"}
                mainContainer={"heading-wrapper"}
              />
            </div>
          </div>
          <div className="row mt-5">
            {/* Name and Initials */}
            <div className="col-12 col-md-6 nameContainer d-flex justify-content-center align-items-center">
              <div className="circle">
                <p className="initials">{appState.profile.name.substr(0, 1)}</p>
              </div>
              <div className="mt-4 name h2">{appState.profile.name}</div>
            </div>
            {/* Personal Details */}

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className="rowDir">
                <PersonalDetails
                  name={appState.profile.email}
                  icon="fa fa-envelope"
                />
                <PersonalDetails
                  name={appState.profile.level}
                  icon="fa fa-cubes"
                />
                <PersonalDetails
                  name={appState.profile.phone_no}
                  icon="fa fa-phone"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "6vw" }}>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="h1 heading-res"
              style={{ fontWeight: "300", lineHeight: "1.2" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              My Events
            </div>
          </div>
          <div className="mt-5">
            <div data-aos="fade-up" data-aos-duration="1000" className="row">
              {Object.keys(appState.profile.events).map((key, index) => (
                <div className="col-12 col-md-4 d-flex justify-content-center mt-res ">
                  <EventCard2
                    eventCode={appState.profile.events[key.toString()]}
                    icon={
                      key.toString() === "NCC"
                        ? NCCIcon
                        : key.toString() === "RC"
                        ? RCIcon
                        : InquizitiveIcon
                    }
                    eventname={
                      key.toString() === "NCC"
                        ? NCCEvent
                        : key.toString() === "RC"
                        ? RCEvent
                        : InquizitiveEvent
                    }
                  />
                </div>
              ))}
            </div>
            {/* <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="row mtt-5 d-flex justify-content-center"
            >
              <div className="col-12 col-md-6 d-flex justify-content-center mt-res">
                <EventCard2 />
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center mt-res">
                <EventCard2 />
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-12 col-md-3 d-flex justify-content-center">
                <EventCard name="Reverse Coding" events="ge" />
              </div>
              <div className="col-12 col-md-3 d-flex justify-content-center">
                <EventCard name="NationalCoding Contest" events="ge" />
              </div>
              <div className="col-12 col-md-3 d-flex justify-content-center">
                <EventCard name="Network Tresure Hunt" events="ge" />
              </div>
              <div className="col-12 col-md-3 d-flex justify-content-center">
                <EventCard name="InQuizitive" events="ge" />
              </div>
            </div> */}
            <div className="row pb-5 margin-bot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
