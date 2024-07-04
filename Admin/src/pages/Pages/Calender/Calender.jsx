//  Importing React Packages
import { useState } from "react"
import { useOutletContext } from "react-router-dom";

// Importing Calendar Plugins
// import FullCalendar, { formatDate } from "@fullcalendar/react"
import { formatDate } from "@fullcalendar/core/index.js"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

export default function Calender() {
  // getting darkTheme state
  const [darkTheme] = useOutletContext();
  
  // UseStates
  const [currentEvents, setCurrentEvents] = useState([])

  // Functions
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if(title){
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected) => {
    if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
      selected.event.remove();
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <span>
        <h1 className="text-4xl font-bold">Calender</h1>
        <p className="text-green-600">Full Calender Interactive Page</p>
      </span>

      <div className="flex gap-3 justify-between flex-wrap">
        {/* Calendar sidebar} */}
        <div className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} flex flex-col gap-5 p-5 rounded-md`}>
          <h2 className="font-bold text-xl">Events</h2>
          <div className="flex flex-col gap-5">
            {currentEvents.map((e,i) => {
              return(
                <div key={i} className={`${darkTheme ? "bg-gray-400" : "bg-green-500"} flex flex-col px-3 py-2 rounded-md`}>
                  <span>{e.title}</span>
                  <hr className={`${darkTheme ? "border-gray-300" : "border-[#fcecc4]"}`} />
                  <span>
                    {formatDate(e.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Calender */}
        <div className="flex-1">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {id: "1234", title: "All-day event", date: "2024-07-14"},
              {id: "4321", title: "Timed event", date: "2024-07-28"},
            ]} />
        </div>
      </div>
    </div>
  )
}