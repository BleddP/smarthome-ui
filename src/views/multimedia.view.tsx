import { Grid, GridItem, Card } from '../components'
import { HomepodPanel } from '../entities'

interface Card {
  id: string | number
  title: string
  description?: string
  component: React.ReactNode | null
  columns?: number
  rows?: number
  alert?: boolean
}

export const MultimediaView = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: 'Homepod',
      component: <HomepodPanel />,
      columns: 2,
      rows: 3,
    },
  ]

  return (
    <div>
      <h2>Multimedia</h2>
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
            <div style={{ height: 150 }}></div>
          </GridItem>
        ))}
      </Grid>
    </div>
  )
}
