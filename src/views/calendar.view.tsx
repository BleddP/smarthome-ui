import { Grid, GridItem, Card } from '../components'

export const CalendarView = () => {
  return (
    <div>
      <h2>Calendar</h2>
      <Grid>
        <GridItem rows={4}>
          <Card title="Bleddyn" />
        </GridItem>
        <GridItem rows={4}>
          <Card title="Tiffany" />
        </GridItem>
        <GridItem rows={4}>
          <Card title="Leyna" />
        </GridItem>
        <GridItem rows={4}>
          <Card title="Stephan" />
        </GridItem>
      </Grid>
    </div>
  )
}
