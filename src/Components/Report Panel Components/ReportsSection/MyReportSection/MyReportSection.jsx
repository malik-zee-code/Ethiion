import {
  faAngleDown,
  faAngleUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import ReportSection from "../ReportSection.component";

const MyReportSection = () => {
  return (
    <ReportSection
      title="My Report"
      actionIcons={[faAngleDown, faAngleUp]}
      icon={faHeart}
    >
      My Report
    </ReportSection>
  );
};

export default MyReportSection;
