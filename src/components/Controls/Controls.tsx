import { Grid, GridItem, Card } from '../index'
import {
  DoorsPanel,
  CarPanel,
  CalendarPanel,
  WeatherPanel,
  HomepodPanel,
} from '../../entities'
import { useStore } from '../../hooks'
import './controls.styles.scss'

export const Controls = () => {
  const entities = useStore()

  const cards = [
    {
      id: 1,
      title: 'Events',
      description: '',
      component: <CalendarPanel />,
      columns: 2,
      rows: 2,
    },
    {
      id: 'door',
      title: 'Doors',
      description: 'The doors',
      component: <DoorsPanel />,
      alert: entities.entities.doors.doorIsOpen,
    },
    {
      id: 3,
      title: 'Weather',
      description: '',
      component: <WeatherPanel />,
      rows: 2,
    },
    {
      id: 5,
      title: 'Homepod',
      component: <HomepodPanel />,
      columns: 1,
    },
    {
      id: 6,
      title: 'Front door',
      description: 'Lorem ipsum whatever comes here next.',
      component: null,
      columns: 2,
    },
    {
      id: 2,
      title: 'Car',
      description: 'Lorem ipsum whatever comes here next.',
      component: <CarPanel />,
      columns: 2,
    },
  ]

  return (
    <Grid>
      {cards.map((card, i) => (
        <GridItem
          rows={card.rows}
          columns={card.columns}
          key={i}>
          <Card
            title={card.title}
            description={card.description}
            component={card.component}
            alert={card.alert}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
