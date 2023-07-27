import TopBar from './TopBar/TopBar'
import './githubSearchPage.css'

function GitHubSearchPage() {
  return (
    <div className="container">
        <TopBar/>
        <div className="search-section">
            <div className="search-input">
                <input type="text" placeholder='search for user'/>
            </div>
            <div className="editing">
                <input type="checkbox" />
                <div className="actions">
                    <span>Edit</span>
                    <span>Delete</span>
                </div>
            </div>
        </div>
        <div className="github-profile-container">
            <div className="card">
                <input type="checkbox" />
                <div className="avatar">
                    <img src="" alt="" />
                </div>
                <span>ID</span>
                <span>Login</span>
                <button>View profile</button>

            </div>
            CARDS
        </div>
    </div>
  )
}

export default GitHubSearchPage