import { Grid, GridItem } from '../components'
import { LivingRoomLights } from '../entities'

export const LightsView = () => {
  return (
    <div>
      <h2>Downstairs</h2>
      <Grid>
        <GridItem columns={2}>
          <LivingRoomLights />
        </GridItem>
      </Grid>
      <Grid>
        <h2>Upstairs</h2>
      </Grid>
    </div>
  )
}
