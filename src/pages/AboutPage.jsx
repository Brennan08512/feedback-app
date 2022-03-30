import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h2>About</h2>
        <p>This is a react app to lave feedback for a product or service.</p>

        <p>Version 1.0.0</p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage