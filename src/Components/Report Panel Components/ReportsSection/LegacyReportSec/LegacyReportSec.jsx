import {
  faAngleDown,
  faAngleUp,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import ReportSection from "../ReportSection.component";

const LegacyReportSec = () => {
  return (
    <ReportSection
      title="Legacy Report"
      actionIcons={[faAngleDown, faAngleUp]}
      icon={faArchive}
    >
    
      Legacy Report
    </ReportSection>
  );
};

export default LegacyReportSec;
