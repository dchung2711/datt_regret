import { Link } from "react-router-dom"

const NotFound = ({ homePath = '/'}: { homePath?: string }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 Not Found</h1>
        <p>Rất tiếc, đường dẫn bạn truy cập không tồn tại.</p>
        <Link to={ homePath } style={{ color: '#6495ed', textDecoration: 'underline' }}>Về trang chủ</Link>
    </div>
  )
}

export default NotFound