import { useMemo } from 'react'
import { useStore } from '../../hooks'
import { API } from '../../constants'
import { MusicPlayingAnimation } from './MusicPlayingAnimation'
import './homepod-panel.styles.scss'

export const HomepodPanel = () => {
  const { entities } = useStore()
  const { homepod } = entities
  const { attributes } = homepod

  const attrs = {
    app_name: 'app',
    image: 'entity_picture',
    location: 'friendly_name',
    arist: 'media_artist',
    track: 'media_title',
    album: 'media_album_name',
    volume: 'volume_level',
  }

  const albumCover = useMemo(() => {
    const path = attributes?.[attrs.image]
    return `${API.HA_IP.ADDRESS}:${API.HA_IP.PORT}${path}`
  }, [attributes])

  if (!attributes || homepod.state !== 'playing') {
    return <div>Homepod not playing</div>
  }

  return (
    <div
      className="homepod-panel"
      style={{ backgroundImage: `url(${albumCover})` }}>
      <div className="homepod-panel__content">
        <MusicPlayingAnimation />
        <h4 style={{ margin: 0, paddingBlock: 8 }}>
          {attributes[attrs.track]}
        </h4>
        <span>{attributes[attrs.arist]}</span>
      </div>
    </div>
  )
}
