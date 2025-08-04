import React, { useState } from 'react';

const days = [
  { id: 'day1', label: 'Day 1: Opening Ceremony', date: 'October 10, 2024' },
  { id: 'day2', label: 'Day 2: Film Screenings', date: 'October 11, 2024' },
  { id: 'day3', label: 'Day 3: Workshops', date: 'October 12, 2024' },
  { id: 'day4', label: 'Day 4: Industry Panels', date: 'October 13, 2024' },
  { id: 'day5', label: 'Day 5: Awards Night', date: 'October 14, 2024' },
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const isActive = (dayId) => activeDay === dayId;

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold">Festival Schedule</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Plan your festival experience with our comprehensive schedule of screenings, workshops, and special events.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-gray-100 rounded-lg p-4 sticky top-24">
              <h3 className="font-bold mb-4">Festival Days</h3>
              <ul className="space-y-2">
                {days.map((day) => (
                  <li key={day.id}>
                    <button
                      onClick={() => setActiveDay(day.id)}
                      className={`day-btn w-full text-left font-medium transition ${
                        isActive(day.id)
                          ? 'text-green-600 font-semibold'
                          : 'hover:text-green-600 text-gray-700'
                      }`}
                    >
                      {day.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Schedule Content */}
          <div className="md:w-3/4">
            {activeDay === 'day1' && (
              <ScheduleDay
                title="October 10, 2024 - Opening Ceremony"
                events={[
                  {
                    time: '4:00 PM - 6:00 PM',
                    title: 'Opening Red Carpet',
                    location: 'Kaduna International Conference Center',
                  },
                  {
                    time: '7:00 PM - 9:30 PM',
                    title: 'Opening Film Premiere',
                    location: '"The Northern Star" - Main Auditorium',
                  },
                  {
                    time: '9:30 PM - 11:30 PM',
                    title: 'Opening Night Reception',
                    location: 'Festival Lounge - VIP Invitation Only',
                  },
                ]}
              />
            )}

            {activeDay === 'day2' && (
              <ScheduleDay
                title="October 11, 2024 - Film Screenings"
                events={[
                  {
                    time: '10:00 AM - 12:30 PM',
                    title: 'Morning Screenings Block A',
                    location: 'Auditorium 1 & 2 - Various Short Films',
                  },
                  {
                    time: '2:00 PM - 4:30 PM',
                    title: 'Afternoon Screenings Block B',
                    location: 'Auditorium 1 - Feature Films',
                  },
                  {
                    time: '6:00 PM - 9:00 PM',
                    title: 'Evening Screenings Block C',
                    location: 'Main Auditorium - International Selections',
                  },
                ]}
              />
            )}

            {activeDay === 'day3' && (
              <ScheduleDay
                title="October 12, 2024 - Workshops"
                events={[
                  {
                    time: '10:00 AM - 12:00 PM',
                    title: 'Cinematography Masterclass',
                    location: 'Workshop Room A - Led by award-winning cinematographer',
                  },
                  {
                    time: '1:00 PM - 3:00 PM',
                    title: 'Screenwriting for African Stories',
                    location: 'Workshop Room B - With renowned Nigerian writers',
                  },
                  {
                    time: '4:00 PM - 6:00 PM',
                    title: 'Indie Film Financing Panel',
                    location: 'Main Conference Hall - Producers and investors discuss funding',
                  },
                ]}
              />
            )}

            {/* Placeholder components for future days */}
            {activeDay === 'day4' && (
              <ScheduleDay
                title="October 13, 2024 - Industry Panels"
                events={[
                  {
                    time: '10:00 AM - 12:30 PM',
                    title: 'Building Film Ecosystems in Africa',
                    location: 'Main Hall - Panel Discussion with Executives',
                  },
                  {
                    time: '2:00 PM - 4:00 PM',
                    title: 'Policy & Production: Bridging Gaps',
                    location: 'Panel Room A - Government & Private Stakeholders',
                  },
                ]}
              />
            )}

            {activeDay === 'day5' && (
              <ScheduleDay
                title="October 14, 2024 - Awards Night"
                events={[
                  {
                    time: '7:00 PM - 10:00 PM',
                    title: 'AIFF Awards Gala',
                    location: 'Main Auditorium - Red Carpet + Ceremony',
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ScheduleDay = ({ title, events }) => (
  <div className="schedule-day">
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
    <div className="space-y-6">
      {events.map((event, idx) => (
        <div key={idx} className="border-l-4 border-green-600 pl-4 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h4 className="font-bold text-lg">{event.title}</h4>
            <div className="text-green-600 font-semibold">{event.time}</div>
          </div>
          <p className="text-gray-600 mt-1">{event.location}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Schedule;
