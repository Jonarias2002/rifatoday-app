import React, {useState} from 'react'

function Loading() {
    const {loading, setLoading} = useState();

    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading