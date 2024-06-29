'use client'
import { Timeline } from 'antd'
import React from 'react'

type Props = {}


type TimelineItem = {
  title: string;
  description: string;
  month: string;
};

const mockData: TimelineItem[] = [
  {
    title: 'Get rid of overthinking',
    description: 'My thoughts must not control me anymore. I control them.',
    month: 'June',
  },
  {
    title: 'Share with people I trust',
    description: 'I must share with others what is heavy for me to be relieved.',
    month: 'June',
  },
  {
    title: 'Say bye to my stigma',
    description: 'Don\'t let the past hold me back. Embrace the present and live in the moment.',
    month: 'July',
  },
  {
    title: 'Build Self-esteem',
    description: 'I must be confident and love myself. I must know that I am able to do whatever I want to accomplish.',
    month: 'June',
  },
  {
    title: 'Have Confidence',
    description: 'Trust myself in whatever I am doing and be determined to reach my goals.',
    month: 'July',
  },
  {
    title: 'Be proud',
    description: 'Relax and enjoy life. Congratulate myself on my amazing progress.',
    month: 'July',
  },
];

function YourGoalsTab({ }: Props) {
  const months = Array.from(new Set(mockData.map(item => item.month)));
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="flex flex-col items-center md:w-1/3 p-4">
          <h2 className="text-xl font-bold text-green-700">Get rid of overthinking</h2>
          <p>My thoughts must not control me anymore. I control them.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 p-4">
          <h2 className="text-xl font-bold text-green-700">Share with people I trust</h2>
          <p>I must share with others what is heavy for me to be relieved.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 p-4">
          <h2 className="text-xl font-bold text-green-700">Say bye to my stigma</h2>
          <p>Don't let the past hold me back. Embrace the present and live in the moment.</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full bg-green-500 h-2 my-4">
        <span className="bg-green-700 h-6 w-6 rounded-full"></span>
        <span className="bg-green-700 h-6 w-6 rounded-full"></span>
        <span className="bg-green-700 h-6 w-6 rounded-full"></span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="flex flex-col items-center md:w-1/3 p-4">
          <h2 className="text-xl font-bold text-green-700">Build Self-esteem</h2>
          <p>I must be confident and love myself. I must know that I am able to do whatever I want to accomplish.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 p-4">
          <h2 className="text-xl font-bold text-green-700">Have Confidence</h2>
          <p>Trust myself in whatever I am doing and be determined to reach my goals.</p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 p-4">
          <h2 className="text-xl font-bold text-green-700">Be proud</h2>
          <p>Relax and enjoy life. Congratulate myself on my amazing progress.</p>
        </div>
      </div>
    </div>
  )
}

export default YourGoalsTab