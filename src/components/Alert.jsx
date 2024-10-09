/* eslint-disable react/prop-types */

const Alert = ({ alert }) => {
    console.log(alert);
    
  return (
    <div className={`p-2 text-center rounded-md text-white mt-8 ${alert.error ? "bg-red-700" : "bg-green-700"}`}>
        <p>{alert.msg}</p>
    </div>
  )
}

export default Alert