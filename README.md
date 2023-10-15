API used - used Youtube's official APIs for videos, video player, recommendations, search results and search suggestions.

Routing - done using App router from the react-router-dom library

Styling - done using Tailwind CSS framework

App level data handling - done using Redux Toolkit library, and binding with application of this redux store done using React-Redux library

Store - containe two slices, app slice to keep track of sidebar so that sidebar acts as hamburger menu with toggling functionality and the cache slice which acts as the cache fto store search suggestions for a particular search text.

Debouncing - added debouncing to reduce the number of API calls made for search suggestions. Instead of an API call for each and every key press, it will make an API call only when the difference between 2 key presses is more than 200ms. Done using setTimeout and clearTimeout inside the useEffect hook.

Caching - added caching to further reduce API calls made for searchText and re-use already available results from previous API calls. Executed by creating a new cache slice in our redux store and storing search suggestions for a particular search text as key value pairs. This makes searching for data very fast with TC of O(1).
