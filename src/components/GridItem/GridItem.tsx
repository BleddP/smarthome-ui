interface Props {
  rows?: number
  columns?: number
  children: React.ReactNode
}

export const GridItem: React.FC<Props> = ({
  rows = 1,
  columns = 1,
  children,
}) => {
  return (
    <div
      style={{
        gridColumn: `span ${columns}`,
        gridRow: `span ${rows}`,
      }}>
      {children}
    </div>
  )
}
