import React, { useState } from "react";
import { fetchUserData, fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [criteria, setCriteria] = useState({ username: "", location: "", repos: "" });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const query = [
      criteria.username && `user:${criteria.username}`,
      criteria.location && `location:${criteria.location}`,
      criteria.repos && `repos:>${criteria.repos}`,
    ]
      .filter(Boolean)
      .join("+");

    try {
      const data = await fetchAdvancedUserData(query);
      setSearchResults(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={criteria.username}
          onChange={(e) => setCriteria({ ...criteria, username: e.target.value })}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={criteria.location}
          onChange={(e) => setCriteria({ ...criteria, location: e.target.value })}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={criteria.repos}
          onChange={(e) => setCriteria({ ...criteria, repos: e.target.value })}
          className="p-2 border rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Search failed. Please try again.</p>}
      {searchResults.length > 0 && (
        <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
          {searchResults.map((user) => (
            <div key={user.id} className="p-4 border rounded-md bg-white">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h3 className="text-xl font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
