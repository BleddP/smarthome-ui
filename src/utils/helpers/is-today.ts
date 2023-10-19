export const isToday = (input: any) => {
  if (!input) return false
  const inputDate = new Date(input)
  const todaysDate = new Date()

  // call setHours to take the time out of the comparison
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)
}
