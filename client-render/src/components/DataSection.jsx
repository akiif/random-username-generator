import React from 'react'

function DataSection({ randomUsername }) {
  return (
    <div class="data-section">
      <div class="data-container">
        <p class="data">
          { randomUsername }
        </p>
      </div>
    </div>
  )
}

export default DataSection