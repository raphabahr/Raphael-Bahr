import "../timeline/timeline.css";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/school.svg";
import timelineElements from "./TimelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
    let workIconStyles = { background: "var(--title-color)" };
    let schoolIconStyles = { background: "var(--text-color)" };

    return (
        <section className="vertical_section ">
            <h1 className="section__title">Qualification</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title animate">
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle animate">
                                {element.location}
                            </h5>
                            <p id="description">{element.description}</p>

                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </section>
    );
}

export default Timeline;