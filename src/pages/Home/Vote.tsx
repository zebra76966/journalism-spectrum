import SearchArea from '../../components/SearchArea/votesearch'
import { Outlet, Link } from 'react-router-dom'

const Voting = () => {
  return (
    <div className='page'>
      <h1 style={{ textAlign: 'center' }}>Which journalist do you follow?</h1>
      <SearchArea />
      <Link
        to='/journalism-spectrum/vote'
        className='ctav'
        style={{ position: 'fixed', bottom: '5%', right: '5%', zIndex: '99' }}
      >
        Proceed to vote <i className='fa fa-arrow-right'></i>
      </Link>
    </div>
  )
}

export default Voting
