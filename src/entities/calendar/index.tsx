import { useState, useEffect, useMemo } from 'react'
import { CalendarItem } from './CalendarItem'
import { Button } from '../../components'
import { isToday } from 'utils/helpers/is-today'
import './calendar-panel.styles.scss'

export interface Event {
  created: Date
  creator: {
    email: string
    self: boolean
  }
  start: {
    dateTime: Date
    timeZone: string
  }
  end: {
    dateTime: Date
    timezone: string
  }
  status: 'confirmed'
  summary: string
  location?: string
  description?: string
}

declare global {
  interface Window {
    gapi: any
    google: any
  }
}

const DISCOVERY_DOC =
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'

export const CalendarPanel = () => {
  const [gapiInitialised, setGapiInitialised] = useState(false)
  const [tokenClient, setTokenClient] = useState<any>(null)
  const [events, setEvents] = useState<any>(null)

  const initializeGapiClient = async () => {
    if (window.gapi) {
      await window.gapi.client.init({
        apiKey: process.env.REACT_URL_G_CALENDAR_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      })
      setGapiInitialised(true)
    } else {
      console.log('gapi is not defined')
    }
  }

  const fetchEvents = async () => {
    try {
      const request = {
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      }
      const response = await window.gapi.client.calendar.events.list(request)
      const list = await window.gapi.client.calendar.calendarList.list({
        maxResults: 10,
      })
      console.log({ list })
      if (response.result.items) setEvents(response.result.items)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCallback = async () => {
    const auth = window.gapi.client.getToken()
    if (auth?.access_token && auth?.expires_in > 0) {
      await fetchEvents()
    } else {
      if (window.gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient?.requestAccessToken({ prompt: 'consent' })
      } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient?.requestAccessToken({ prompt: '' })
      }
    }
  }

  const handleGoogleLogin = () => {
    handleCallback()
  }

  const initializeGoogleServices = async () => {
    if (window.google) {
      setTokenClient(
        window.google.accounts.oauth2.initTokenClient({
          client_id: process.env.REACT_APP_G_CALENDAR_ID,
          scope: process.env.REACT_APP_G_SCOPES,
          callback: '',
        })
      )
    }
  }

  useEffect(() => {
    const gapi = (window as any).gapi
    const google = (window as any).google

    gapi && gapi.load('client', initializeGapiClient)
    google && initializeGoogleServices()
  }, [])

  const todaysEvents: any = useMemo(() => {
    return events?.filter((item: Event) => isToday(item.start.dateTime))
  }, [events])

  const notTodayEvents: any = useMemo(() => {
    return events?.filter((item: Event) => !isToday(item.start.dateTime))
  }, [events])

  return (
    <div>
      <Button
        onClick={handleGoogleLogin}
        label={events?.length ? 'Refresh events' : 'Show events'}
      />
      <h4>Today</h4>
      {todaysEvents?.length ? (
        todaysEvents.map((event: Event, i: number) => (
          <CalendarItem
            key={i}
            event={event}
          />
        ))
      ) : (
        <div>No events planned for today</div>
      )}
      <h4>Other events</h4>
      <div className="other-events">
        {notTodayEvents?.length &&
          notTodayEvents.map((event: Event, i: number) => (
            <CalendarItem
              key={i}
              event={event}
            />
          ))}
      </div>
    </div>
  )
}
