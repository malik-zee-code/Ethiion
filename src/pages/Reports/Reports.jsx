import React from "react";
import ReportHeader from "../../Components/Report Panel Components/ReportHeader/ReportHeader";
import ReportUIContainer from "../../Components/Report Panel Components/ReportUIContainer/ReportUIContainer";
import classes from "./Reports.module.css";
import AppWidgetSummary from "../../Components/Report Panel Components/Reports/MyReportBar/AppWidgetSummary.js"
import AppConversionRates from "../../Components/Report Panel Components/Reports/MyReportBar/AppConversionRates.js"
import AppWebsiteVisits from "../../Components/Report Panel Components/Reports/MyReportBar/AppWebsiteVisits.js"
import AppCurrentVisits from "../../Components/Report Panel Components/Reports/MyReportBar/AppCurrentVisits.js"
import { useTheme } from '@mui/material/styles';
import { Grid, Container,Typography } from '@mui/material';
import Page from '../../Components/Page.js';
const Reports = () => {
  const theme = useTheme();
  return (
    <div className={classes.reportContainer}>
      <div title="Dashboard">
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            Hi, Welcome back
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="New Jobs" total={5} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Current Candidates" total={536} color="info" />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Candidates Applied" total={34} color="warning" />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWidgetSummary title="Invited" total={2} color="error" />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppWebsiteVisits
                title="Job seekers"
                subheader="(+43%) than last month"
                chartLabels={[
                  '01/01/2022',
                  '02/01/2022',
                  '03/01/2022',
                  '04/01/2022',
                  '05/01/2022',
                  '06/01/2022',
                  '07/01/2022',
                  '08/01/2022',
                  '09/01/2022',
                  '10/01/2022',
                  '11/01/2022',
                ]}
                chartData={[
                  {
                    name: 'TSR',
                    type: 'column',
                    fill: 'solid',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                  },
                  {
                    name: 'Developers',
                    type: 'area',
                    fill: 'gradient',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                  {
                    name: 'Designers',
                    type: 'line',
                    fill: 'solid',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                  {
                    name: 'CSR',
                    type: 'line',
                    fill: 'solid',
                    data: [10, 95, 26, 40, 45, 35, 64, 62, 59, 30, 31],
                  },
                ]}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppCurrentVisits
                title="HR Stats"
                chartData={[
                  { label: 'Applicants', value: 4344 },
                  { label: 'Seleted', value: 5435 },
                  { label: 'On Hold', value: 1443 },
                  { label: 'Rejected', value: 4443 },
                ]}
                chartColors={[
                  theme.palette.primary.main,
                  theme.palette.chart.blue[0],
                  theme.palette.chart.violet[0],
                  theme.palette.chart.yellow[0],
                ]}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={8}>
              <AppConversionRates
                title="Candidate Locations"
                chartData={[
                  { label: 'Italy', value: 400 },
                  { label: 'Japan', value: 430 },
                  { label: 'China', value: 448 },
                  { label: 'Canada', value: 470 },
                  { label: 'France', value: 540 },
                  { label: 'Germany', value: 580 },
                  { label: 'South Korea', value: 690 },
                  { label: 'Netherlands', value: 1100 },
                  { label: 'United States', value: 1200 },
                  { label: 'Jamica', value: 1380 },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <AppCurrentVisits
                title="Current Job Holders"
                chartData={[
                  { label: 'Software Domain', value: 4344 },
                  { label: 'Marketing', value: 5435 },
                  { label: 'Designers', value: 1443 },
                  { label: 'Assistants', value: 1543 },
                ]}
                chartColors={[
                  theme.palette.primary.main,
                  theme.palette.chart.yellow[0],
                  theme.palette.chart.violet[0],
                  theme.palette.chart.blue[0],
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <br/><br/>







      <ReportHeader />
      <ReportUIContainer />
    </div>
  );
};

export default Reports;
