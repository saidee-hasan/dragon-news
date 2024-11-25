import './leftSideNav.css';
import LeftCards from './LeftCards';

const LeftSideNav = ({ category, sortingCategory }) => {
  return (
    <div className='md:block hidden'>
      <h2 className="text-neutral-700 text-xl font-semibold font-['Poppins'] leading-[30px] mb-4 ms-2">All Categories</h2>
      <div className=''>
        {category.map(category => (
          <button 
            onClick={() => { sortingCategory(category.id) }}
            key={category.id} 
            className='block mx-2 mb-2 w-40 p-3 text-start text-xl font-medium bg-gray-300 text-gray-900 hover:bg-blue-600 hover:text-white active:bg-blue-700 rounded transition duration-200 ease-in-out'
          >
            {category.name}
          </button>
        ))}
      </div>

      <LeftCards />
    </div>
  );
}

export default LeftSideNav;