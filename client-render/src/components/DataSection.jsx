import React from 'react'

function DataSection({ randomUsername }) {
  return (
    <div className="data-section">
      <div className="data-container">
        <p className="data">
          { randomUsername }
        </p>
      </div>
    </div>
  )
}

export default DataSection