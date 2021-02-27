import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart({ labels, dataSet }) {
  const data = {
    labels,
    datasets: dataSet
  }

  return (
    <div>
      <article className="canvas-container">
        <Line data={data} width={400} height={screen.width < 600 ? 400 : 100} />
      </article>
    </div>
  )
}
