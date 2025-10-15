import { Search, SlidersHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';
import MainData from '../Data/MainData';
import { useAppContext } from '../Context/AppContext';


const TooltipIcon = ({ icon: Icon, text }) => (
  <div className="relative group flex items-center">
    <Icon
      className="w-5 h-5 md:w-6 md:h-6 cursor-pointer transition-colors"
      style={{ color: 'var(--secondary-text)' }}
    />
    <span
      className="absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2
                 text-xs rounded px-2 py-1 shadow-md
                 opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
      style={{
        backgroundColor: 'var(--header-bg)',
        color: 'var(--text-color)',
      }}
    >
      {text}
    </span>
  </div>
);

const SearchBox = () => {
  const { setSelectMailId } = useAppContext();
  const [input, setInput] = useState('');
  const [result, setResultData] = useState([]);
  const [showResults, setshowResults] = useState(false)

  const fetchData = () => {
    const query = input.trim().toLowerCase();

    if (!query) {
      setResults([]);
      setshowResults(false);
      return;
    }

    const findData = MainData.filter(
      (res) =>
        res.message && res.message.toLowerCase().includes(query)
    );
    setshowResults(true)
    setResultData(findData);

  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 200); // ⏳ debounce effect
    return () => clearTimeout(timer);
  }, [input]);

  const handleClick = (i) => {
    setSelectMailId(i.id)
    setshowResults(false)
    setInput("");
  }


  return (
    <div className="relative w-full max-w-[600px] mx-2 sm:mx-4">
      {/* Search Input */}
      <div
        className="flex items-center flex-1 rounded-full px-3 py-2 transition-colors duration-300  border focus-within:ring-1 focus-within:ring-green-400"
        style={{
          backgroundColor: 'var(--search-bg)',
          borderColor: 'rgba(0,0,0,0.05)',
        }}
      >
        <TooltipIcon icon={Search} text="Search" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          onFocus={() => input && setshowResults(true)}
          onBlur={() => setTimeout(() => setshowResults(false), 200)} 
          placeholder="Search mail..."
          className="flex-1 outline-none px-2 text-sm sm:text-base bg-transparent placeholder-gray-500"
          style={{ color: 'var(--text-color)' }}
        />
        <TooltipIcon icon={SlidersHorizontal} text="Filter" />
      </div>

      {/* Search Results Dropdown */}
      {
        showResults &&

        (<ul
          className="absolute top-full mt-2 w-full rounded-xl shadow-md max-h-60 overflow-y-auto z-50 border"
          style={{
            backgroundColor: 'var(--header-bg)',
            borderColor: 'rgba(0,0,0,0.05)',
          }}
        >
          {result.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item)}
              className="px-4 py-2 cursor-pointer transition-colors duration-200 text-sm"

              style={{
                color: 'var(--text-color)',
              }}
              onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                document.body.classList.contains('dark')
                  ? '#374151'
                  : '#f1f5f9')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'transparent')
              }
            >
              <p className="font-semibold" style={{ color: '#22C55E' }}>
                {item.sender}
              </p>
              <p
                className="text-sm"
                style={{ color: 'var(--secondary-text)' }}
              >
                {item.subject}
              </p>
              <p
                className="text-xs truncate"
                style={{ color: 'var(--secondary-text)' }}
              >
                {item.message}
              </p>
            </li>
          ))}
        </ul>
        )}

      {
        input && result.length == 0 && (
          <div className="absolute top-full mt-2 w-full z-20 bg-white rounded-lg shadow-lg text-center py-3 text-sm"
            style={{
              color: 'var(--secondary-text)',
              backgroundColor: 'var(--header-bg)',
            }}
          >
            No results found
          </div>
        )
      }


    </div>
  );
};

export default SearchBox;
