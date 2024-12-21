import React from "react";

// internal components
import {AnalyticsGraph, AnalyticsComparisonChart,AnalyticsForecasts} from '../components'

function Analytics() {
  return (
    <div>
      <p className="text-3xl font-medium">Analytics</p>

      <div className="my-10 flex flex-col xl:flex-row items-center gap-5">
        <AnalyticsGraph />
        <AnalyticsComparisonChart />
        <AnalyticsForecasts />
      </div>
    </div>
  );
}

export default Analytics;
