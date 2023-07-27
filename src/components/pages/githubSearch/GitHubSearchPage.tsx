import GithubUsers from './GithubUsers/GithubUsers'
import SearchSection from './SearchSection/SearchSection'
import TopBar from './TopBar/TopBar'
import './githubSearchPage.css'

function GitHubSearchPage() {
  return (
    <div className="container">
        <TopBar/>
        <SearchSection/>
        <GithubUsers/>
    </div>
  )
}

export default GitHubSearchPage