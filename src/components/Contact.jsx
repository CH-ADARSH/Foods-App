import React from "react";
const Contact = () => {
  return (
    <div >
      <h1 className="font-bold text-2xl p-4 m-4">Contact us</h1>
      <form >
        <input className="border border-black p-2 m-2 " placeholder="Name" />
        <input className="border border-black p-2 m-2 " placeholder="password" />
        <button className="p-2 m-2 rounded-md shadow-md bg-gray-300">Submit</button>
      </form>
    </div>
  )
}

export default Contact;