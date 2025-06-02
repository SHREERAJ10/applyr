import React from "react";

function SaveBtn({ prepData, storageKey, setCardShown }) {
    function saveData(jobData) {
        if (localStorage.getItem(storageKey) == null) {
            localStorage.setItem(storageKey, JSON.stringify([]));
        }
        const currentEntries = JSON.parse(localStorage.getItem(storageKey));
        localStorage.setItem(
            storageKey,
            JSON.stringify([...currentEntries, jobData])
        );
        setCardShown(false);
    }
    return (
        <div>
            <button
                className="p-2 cursor-pointer"
                onClick={() => {
                    saveData(prepData());
                }}
            >
                Save
            </button>
        </div>
    );
}

export default SaveBtn;
