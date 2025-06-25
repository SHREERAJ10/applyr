import React from 'react'
import Header from '../components/Header'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts'

function Stats({ getData }) {

  const jobDataArray = getData();
  const statusColors = {
  Interview: '#3B82F6', // Blue
  Rejected: '#EF4444',  // Red
  Pending: '#F59E0B',   // Amber
  Offered: '#10B981',   // Emerald
  Wishlist: '#8B5CF6',  // Violet
};

  let jobStatusArr = [];
  let dataObj = {};

  if (jobDataArray.length != 0) {
    for (let jobData of jobDataArray) {
      let status = jobData.jobStatus
      if (status in dataObj) {
        dataObj[`${status}`] += 1;
      }
      else {
        dataObj[`${status}`] = 1;
      }
    }
  }

  for (let key in dataObj) {
    jobStatusArr.push({
      name: key,
      value: dataObj[key]
    })
  }


  return (
    <div className="w-full h-[70vh] flex justify-center">
      <ResponsiveContainer width='80%' height='100%' className="focus:outline-none">
        <PieChart width='100%' height='100%'>
          <Pie
            data={jobStatusArr}
            dataKey='value'
            isAnimationActive={false}
            outerRadius={120}
            fill='red'
            label
          >
            {jobStatusArr.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={statusColors[entry.name]} />
            })}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Stats