
export default function Modal({ title, isOpen, onClose, onSave,children }) {
  if (!isOpen) return null;

  const handleWhiteSpaceClick = (e) => {
    if(e.target===e.currentTarget){
        onClose();
    }
  }
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={handleWhiteSpaceClick}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>

          {/* Body */}
          <div className="modal-body">{children}</div>
          {/* Footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-light" onClick={onSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
