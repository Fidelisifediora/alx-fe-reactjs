import { Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li><a href="/profile/details">Details</a></li>
          <li><a href="/profile/settings">Settings</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;


