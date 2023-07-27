import SearchSection from './SearchSection/SearchSection'
import TopBar from './TopBar/TopBar'
import './githubSearchPage.css'

function GitHubSearchPage() {
  return (
    <div className="container">
        <TopBar/>
        <SearchSection/>
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