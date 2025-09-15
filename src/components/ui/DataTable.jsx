
export default function DataTable({data,children , ...props}) {
  return (
    <table className="table" {...props}>
        {children}
    </table>
  )
}
