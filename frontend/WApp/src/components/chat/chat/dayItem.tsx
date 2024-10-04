type DayItemProps = {
  day: string
}

const DayItem = ({ day }: DayItemProps) => {
  return (
    <div className="w-full min-h-20 flex justify-center items-center font-thin">
      <p>{day}</p>
    </div>
  )
}

export default DayItem