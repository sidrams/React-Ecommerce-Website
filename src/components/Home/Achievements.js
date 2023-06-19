import achievement from './achievements.svg'

function Achievements() {
    return (
        <div className='bg-gray-100 '>
            <h2 className="font-bold text-5xl leading-[120%] text-gray-900 tracking-wide text-center">
                Our Achievements
            </h2>
            <img alt={achievement} className="m-auto p-16 object-contain object-center h-[55%] block" src={achievement} />
        </div>
    );
  }
  
  export default Achievements;
  