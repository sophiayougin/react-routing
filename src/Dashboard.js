import { BrowserRouter as Router, Link, Route, Switch, useParams, useRouteMatch }from 'react-router-dom';

function Dashboard() {
    let { path, url } = useRouteMatch();
    return (
      <Router>
        <div className="dashboard">
            <h1>Dashboard</h1>
            <h2>Topics</h2>
            <ul>
                <Link to={`${url}/rendering`}><li>Rendering with react</li></Link>
                <Link to={`${url}/components`}><li>Components</li></Link>
                <Link to={`${url}/prop-v-state`}><li>props v. State</li></Link>
            </ul> 
            <Switch>
                <Route 
                    path={`${path}/:topicId`}>
                    <Topic/>
                </Route>
            </Switch>
        </div>
      </Router>  
    );
  }
  function Topic(){
      let { topicId } = useParams();
      return(
          <div>
              <h3>{topicId}</h3>
          </div>
      );
  }
  
  export default Dashboard;