import { Button, Timeline } from "flowbite-react";
import { about_this_web_app } from "../../constants";
import {
  MdAccountCircle,
  MdHomeRepairService,
  MdOutlinePayment,
} from "react-icons/md";
import { HiCalendar } from "react-icons/hi";
import { FaStopwatch } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";

export const About = () => {
  const handleScroll = (e: any) => {
    e.preventDefault();
    const stepsSection = document.getElementById("steps");
    if (stepsSection) {
      stepsSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the start of the section
      });
    }
  };
  return (
    <section>
      <div className=" relative bg-about-back bg-cover bg-center bg-no-repeat h-[650px]">
        <div className="absolute inset-0 bg-gray-900/75 bg-gradient-to-r sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className=" relative mx-auto max-w-screen-xl flex flex-col items-center lg:items-start justify-center text-start">
          <div className=" my-[100px]">
            <h1 className=" text-4xl text-sky-600 underline underline-offset-2 font-bold py-4">
              Who we are?
            </h1>
            <p className=" text-white font-semibold text-sm lg:text-lg w-[300px] lg:w-[650px]">
              {about_this_web_app}
            </p>
            <a href={"#steps"} onClick={handleScroll}>
              <Button className=" my-4 py-1 lg:text-lg">
                Step by Step Guide
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className=" my-4 flex flex-col items-center w-full">
        <div>
          <h2 className="text-3xl text-sky-600 underline underline-offset-2 font-bold py-4">
            {" "}
            How can I book a service?
          </h2>
        </div>
        <div
          id="steps"
          className="w-[300px] lg:w-[600px] p-5 rounded-md shadow-md"
        >
          <Timeline>
            <Timeline.Item>
              <Timeline.Point icon={MdAccountCircle} />
              <Timeline.Content>
                <Timeline.Title>Create an Account</Timeline.Title>
                <Timeline.Body>
                  Firstly Create a personal account. It will be difficult to
                  track your bookings from anonymous account
                </Timeline.Body>
                <Button color="gray">Sign Up</Button>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={MdHomeRepairService} />
              <Timeline.Content>
                <Timeline.Title>Pick a Service</Timeline.Title>
                <Timeline.Body>
                  Go to the service page. Search a service from the list and
                  select it.Click on "Details" button.
                </Timeline.Body>
                <Button color="gray">Services</Button>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Title>Select a Slot</Timeline.Title>
                <Timeline.Body>
                  In the service details page you will find service
                  charges,estimated times and a time table of slots. Select a
                  slot which is convenient for you
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={MdOutlinePayment} />
              <Timeline.Content>
                <Timeline.Title>Pay and Book</Timeline.Title>
                <Timeline.Body>
                  We take payments via credit cards.We accept MasterCard,VISA
                  card etc. After a successfull payment the booking is complete.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={FaStopwatch} />
              <Timeline.Content>
                <Timeline.Title>Now wait for the Day!</Timeline.Title>
                <Timeline.Body>
                  With successfull payment and booking the whole process is
                  complete! Now wait for the day and time you have chosen.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={CiBookmarkCheck} />
              <Timeline.Content>
                <Timeline.Title>Track your Booking</Timeline.Title>
                <Timeline.Body>
                  Go to your dashboard (look Up!). Then go to "My Bookings"
                  page. You will get a table containing your booking history.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
        <div></div>
      </div>
    </section>
  );
};
