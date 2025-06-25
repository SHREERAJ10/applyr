import React from 'react'
import Button from './Button'
import Backdrop from './Backdrop'

function ConfirmationPopup({text, deleteOrNot, deleteJobEntry, curJobId}) {
  return (
    <>
    <div className="w-full flex justify-center p-4 z-10">
        <div className="bg-white w-96 shadow shadow-black rounded-3xl p-4 flex flex-col gap-4">
            <div className="text-center text-lg">
                {text}
            </div>
            <div className="flex justify-between">
                <div className="border border-slate-200 w-20 rounded-xl flex justify-center">
                    <Button text="Cancel" onClick={deleteOrNot} />
                </div>
                <div className="bg-red-500 text-white w-20 flex items-center justify-center rounded-xl">
                    <Button text="Delete" onClick={()=>deleteJobEntry(curJobId)} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ConfirmationPopup